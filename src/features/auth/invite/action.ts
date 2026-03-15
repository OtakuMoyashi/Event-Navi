"use server";

import { auth } from "@/lib/auth";
import { getDb } from "@/lib/db";
import {
  admins,
  events,
  invites,
  inviteRoleValues,
  inviteScopeValues,
  organizations,
  stores,
} from "@/lib/db/schema";
import {
  buildInviteUrl,
  generateInviteToken,
  getIssuerScopeFromAdminRole,
  hashInviteToken,
  validateInviteHierarchy,
} from "@/features/auth/invite/lib";
import { and, eq } from "drizzle-orm";
import { headers } from "next/headers";
import z from "zod";

const createInviteSchema = z.object({
  targetScope: z.enum(inviteScopeValues),
  role: z.enum(inviteRoleValues),
  organizationId: z.string().optional(),
  eventId: z.string().optional(),
  storeId: z.string().optional(),
  expiresInHours: z.coerce.number().int().min(1).max(168).default(72),
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createInvite(prevState: any, formData: FormData) {
  try {
    const validationResult = createInviteSchema.safeParse({
      targetScope: formData.get("targetScope") as string,
      role: formData.get("role") as string,
      organizationId: (formData.get("organizationId") as string) || undefined,
      eventId: (formData.get("eventId") as string) || undefined,
      storeId: (formData.get("storeId") as string) || undefined,
      expiresInHours: formData.get("expiresInHours") as string,
    });

    if (validationResult.error) {
      console.log(validationResult.error);
      return {
        success: false,
        message: null,
        error: "入力形式が正しくありません。",
      };
    }

    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user) {
      return {
        success: false,
        message: null,
        error: "ログインが必要です。",
      };
    }

    const db = await getDb();
    const issuerRows = await db
      .select({
        id: admins.id,
        role: admins.role,
        organizationId: admins.organizationId,
        eventId: admins.eventId,
        storeId: admins.storeId,
      })
      .from(admins)
      .where(eq(admins.userId, session.user.id))
      .limit(1);

    if (issuerRows.length === 0) {
      return {
        success: false,
        message: null,
        error: "管理者権限が必要です。",
      };
    }

    const issuerAdmin = issuerRows[0];
    const issuerScope = getIssuerScopeFromAdminRole(issuerAdmin.role);
    if (!issuerScope) {
      return {
        success: false,
        message: null,
        error: "発行者の権限が不正です。",
      };
    }

    const {
      targetScope,
      role,
      organizationId,
      eventId,
      storeId,
      expiresInHours,
    } = validationResult.data;

    const hierarchyResult = validateInviteHierarchy({
      issuerScope,
      targetScope,
      role,
      organizationId,
      eventId,
      storeId,
    });

    if (!hierarchyResult.ok) {
      return {
        success: false,
        message: null,
        error: hierarchyResult.error,
      };
    }

    if (issuerScope === "SYSTEM" && organizationId) {
      const organizationRows = await db
        .select({ id: organizations.id })
        .from(organizations)
        .where(eq(organizations.id, organizationId))
        .limit(1);

      if (organizationRows.length === 0) {
        return {
          success: false,
          message: null,
          error: "指定された組織が存在しません。",
        };
      }
    }

    if (issuerScope === "ORGANIZATION" && organizationId && eventId) {
      if (issuerAdmin.organizationId !== organizationId) {
        return {
          success: false,
          message: null,
          error: "他組織のイベント招待は発行できません。",
        };
      }

      const eventRows = await db
        .select({ id: events.id })
        .from(events)
        .where(
          and(
            eq(events.id, eventId),
            eq(events.organizationId, organizationId),
          ),
        )
        .limit(1);

      if (eventRows.length === 0) {
        return {
          success: false,
          message: null,
          error: "イベントと組織の関連が不正です。",
        };
      }
    }

    if (issuerScope === "EVENT" && organizationId && eventId && storeId) {
      if (issuerAdmin.eventId !== eventId) {
        return {
          success: false,
          message: null,
          error: "他イベントの店舗招待は発行できません。",
        };
      }

      const eventRows = await db
        .select({ id: events.id, organizationId: events.organizationId })
        .from(events)
        .where(eq(events.id, eventId))
        .limit(1);

      if (
        eventRows.length === 0 ||
        eventRows[0].organizationId !== organizationId
      ) {
        return {
          success: false,
          message: null,
          error: "イベントと組織の関連が不正です。",
        };
      }

      const storeRows = await db
        .select({ id: stores.id })
        .from(stores)
        .where(and(eq(stores.id, storeId), eq(stores.eventId, eventId)))
        .limit(1);

      if (storeRows.length === 0) {
        return {
          success: false,
          message: null,
          error: "店舗とイベントの関連が不正です。",
        };
      }
    }

    const rawToken = generateInviteToken();
    const tokenHash = await hashInviteToken(rawToken);
    const expiresAt = new Date(Date.now() + expiresInHours * 60 * 60 * 1000);

    await db.insert(invites).values({
      tokenHash,
      issuerAdminId: issuerAdmin.id,
      issuerScope,
      targetScope,
      role,
      organizationId,
      eventId,
      storeId,
      expiresAt,
    });

    const inviteUrl = buildInviteUrl(rawToken);

    return {
      success: true,
      message: "招待リンクを発行しました。",
      error: null,
      inviteUrl,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: null,
      error: "サーバーエラーが発生しました。",
    };
  }
}
