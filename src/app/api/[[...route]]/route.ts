import { Hono } from "hono";
import { handle } from "hono/vercel";
import { getAuth } from "@/lib/auth";
import { getDb } from "@/lib/db";
import { admins, staffs, users } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

const app = new Hono().basePath("/api");

// better-auth handler
app.on(["GET", "POST"], "/auth/*", async (c) => {
  const auth = await getAuth();
  return auth.handler(c.req.raw);
});

// Authorization check
app.get("/authz", async (c) => {
  const role = c.req.query("role");
  if (role !== "admin" && role !== "staff") {
    return c.json({ ok: false }, 400);
  }

  const auth = await getAuth();
  const db = await getDb();

  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session?.user) {
    return c.json({ ok: false }, 401);
  }

  if (role === "admin") {
    const adminRows = await db
      .select({ userId: admins.userId })
      .from(admins)
      .where(eq(admins.userId, session.user.id))
      .limit(1);

    if (adminRows.length === 0) {
      return c.json({ ok: false }, 403);
    }
  }

  if (role === "staff") {
    const staffRows = await db
      .select({ userId: staffs.userId })
      .from(staffs)
      .where(eq(staffs.userId, session.user.id))
      .limit(1);

    if (staffRows.length === 0) {
      return c.json({ ok: false }, 403);
    }
  }

  return c.json({ ok: true }, 200);
});

// User info
app.get("/user", async (c) => {
  const auth = await getAuth();
  const db = await getDb();

  const session = await auth.api.getSession({ headers: c.req.raw.headers });
  if (!session?.user) {
    return c.json({ user: null }, 401);
  }

  try {
    const userRows = await db
      .select()
      .from(users)
      .where(eq(users.id, session.user.id))
      .limit(1);
    const user = userRows[0];
    if (!user) {
      return c.json({ user: null }, 404);
    }
    return c.json({ user }, 200);
  } catch (error) {
    console.error("DB error:", error);
    return c.json({ user: null }, 500);
  }
});

export type AppType = typeof app;

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
