import type { AdminRole, InviteRole, InviteScope } from "@/lib/db/schema";

const INVITE_TOKEN_CHARS =
  "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";

function toHex(bytes: Uint8Array) {
  return Array.from(bytes)
    .map((value) => value.toString(16).padStart(2, "0"))
    .join("");
}

function getInvitePepper() {
  const pepper =
    process.env.INVITE_TOKEN_PEPPER ?? process.env.BETTER_AUTH_SECRET;
  if (!pepper) {
    throw new Error("INVITE_TOKEN_PEPPER が設定されていません。");
  }
  return pepper;
}

export function generateInviteToken(length = 24) {
  const randomValues = crypto.getRandomValues(new Uint8Array(length));
  return Array.from(randomValues)
    .map((value) => INVITE_TOKEN_CHARS[value % INVITE_TOKEN_CHARS.length])
    .join("");
}

export async function hashInviteToken(token: string) {
  const pepper = getInvitePepper();
  const payload = new TextEncoder().encode(`${token}.${pepper}`);
  const digest = await crypto.subtle.digest("SHA-256", payload);
  return toHex(new Uint8Array(digest));
}

export function getIssuerScopeFromAdminRole(
  role: AdminRole,
): InviteScope | null {
  if (role === "SUPER_ADMIN") {
    return "SYSTEM";
  }

  if (role === "ORGANIZATION_ADMIN") {
    return "ORGANIZATION";
  }

  if (role === "EVENT_ADMIN") {
    return "EVENT";
  }

  if (role === "STORE_ADMIN") {
    return "STORE";
  }

  return null;
}

type ValidateInviteHierarchyParams = {
  issuerScope: InviteScope;
  targetScope: InviteScope;
  role: InviteRole;
  organizationId?: string | null;
  eventId?: string | null;
  storeId?: string | null;
};

export function validateInviteHierarchy({
  issuerScope,
  targetScope,
  role,
  organizationId,
  eventId,
  storeId,
}: ValidateInviteHierarchyParams) {
  if (issuerScope === "SYSTEM") {
    if (targetScope !== "ORGANIZATION" || role !== "ORGANIZATION_ADMIN") {
      return {
        ok: false,
        error:
          "システム管理者は組織管理者向け招待（SYSTEM→ORGANIZATION）のみ発行できます。",
      };
    }
    if (!organizationId || eventId || storeId) {
      return {
        ok: false,
        error: "SYSTEM→ORGANIZATION では organizationId のみ指定してください。",
      };
    }
    return { ok: true };
  }

  if (issuerScope === "ORGANIZATION") {
    if (targetScope !== "EVENT" || role !== "EVENT_ADMIN") {
      return {
        ok: false,
        error:
          "組織管理者はイベント管理者向け招待（ORGANIZATION→EVENT）のみ発行できます。",
      };
    }
    if (!organizationId || !eventId || storeId) {
      return {
        ok: false,
        error:
          "ORGANIZATION→EVENT では organizationId と eventId を指定してください。",
      };
    }
    return { ok: true };
  }

  if (issuerScope === "EVENT") {
    if (
      targetScope !== "STORE" ||
      (role !== "STORE_ADMIN" && role !== "STAFF")
    ) {
      return {
        ok: false,
        error:
          "イベント管理者は店舗管理者/スタッフ向け招待（EVENT→STORE）のみ発行できます。",
      };
    }
    if (!organizationId || !eventId || !storeId) {
      return {
        ok: false,
        error:
          "EVENT→STORE では organizationId・eventId・storeId をすべて指定してください。",
      };
    }
    return { ok: true };
  }

  return {
    ok: false,
    error: "この権限では招待を発行できません。",
  };
}

export function buildInviteUrl(token: string, path = "/signup/admin") {
  const baseUrl =
    process.env.BETTER_AUTH_URL ?? process.env.NEXT_PUBLIC_APP_URL;
  const search = new URLSearchParams({ token }).toString();
  if (!baseUrl) {
    return `${path}?${search}`;
  }
  return `${baseUrl.replace(/\/$/, "")}${path}?${search}`;
}
