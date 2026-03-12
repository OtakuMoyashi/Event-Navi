import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const storeTypeValues = ["ATTRACTION", "FOOD"] as const;
export type StoreType = (typeof storeTypeValues)[number];

export const ticketStatusValues = [
  "ISSUED",
  "CALLED",
  "COMPLETED",
  "CANCELED",
] as const;
export type TicketStatus = (typeof ticketStatusValues)[number];

export const stockChangedReasonValues = ["SELLING"] as const;
export type StockChangedReason = (typeof stockChangedReasonValues)[number];

export const adminRoleValues = [
  "SUPER_ADMIN",
  "ORGANIZATION_ADMIN",
  "EVENT_ADMIN",
  "STORE_ADMIN",
] as const;
export type AdminRole = (typeof adminRoleValues)[number];

export const users = sqliteTable("user", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email").notNull().unique(),
  emailVerified: integer("emailVerified", { mode: "boolean" }).notNull(),
  image: text("image"),
  isAnonymous: integer("isAnonymous", { mode: "boolean" }),
  role: text("role").notNull().default("user"),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull(),
});

export const sessions = sqliteTable("session", {
  id: text("id").primaryKey(),
  expiresAt: integer("expiresAt", { mode: "timestamp_ms" }).notNull(),
  token: text("token").notNull().unique(),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});

export const accounts = sqliteTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: integer("accessTokenExpiresAt", {
    mode: "timestamp_ms",
  }),
  refreshTokenExpiresAt: integer("refreshTokenExpiresAt", {
    mode: "timestamp_ms",
  }),
  scope: text("scope"),
  password: text("password"),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull(),
});

export const verifications = sqliteTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expiresAt", { mode: "timestamp_ms" }).notNull(),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }),
});

export const organizations = sqliteTable("organizations", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description"),
  inviteCode: text("inviteCode").notNull(),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});
export type Organization = typeof organizations.$inferSelect;

export const events = sqliteTable("events", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  isActive: integer("isActive", { mode: "boolean" }).notNull().default(false),
  startedAt: integer("startedAt", { mode: "timestamp_ms" }),
  finishedAt: integer("finishedAt", { mode: "timestamp_ms" }),
  description: text("description"),
  organizationId: text("organizationId").references(() => organizations.id),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Event = typeof events.$inferSelect;

export const stores = sqliteTable("stores", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  isActive: integer("isActive", { mode: "boolean" }).notNull().default(false),
  startedAt: integer("startedAt", { mode: "timestamp_ms" }),
  finishedAt: integer("finishedAt", { mode: "timestamp_ms" }),
  description: text("description"),
  storeType: text("storeType", { enum: storeTypeValues })
    .$type<StoreType>()
    .notNull(),
  eventId: text("eventId").references(() => events.id),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Store = typeof stores.$inferSelect;

export const attractions = sqliteTable("attracions", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  playTime: integer("playTime").default(5),
  peopleCapacity: integer("peopleCapacity").notNull().default(5),
  storeId: text("storeId")
    .notNull()
    .unique()
    .references(() => stores.id, { onDelete: "cascade" }),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Attraction = typeof attractions.$inferSelect;

export const foods = sqliteTable("foods", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  storeId: text("storeId")
    .notNull()
    .unique()
    .references(() => stores.id, { onDelete: "cascade" }),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Food = typeof foods.$inferSelect;

export const tickets = sqliteTable("tickets", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  index: integer("index").notNull(),
  numberOfPeople: integer("numberOfPeople").notNull(),
  status: text("status", { enum: ticketStatusValues })
    .$type<TicketStatus>()
    .notNull()
    .default("ISSUED"),
  isPaper: integer("isPaper", { mode: "boolean" }).notNull().default(false),
  attractionId: text("attractionId")
    .notNull()
    .references(() => attractions.id),
  userId: text("userId")
    .notNull()
    .references(() => users.id),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Ticket = typeof tickets.$inferSelect;

export const items = sqliteTable("items", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name").notNull(),
  stock: integer("stock").notNull().default(0),
  price: integer("price").notNull(),
  foodId: text("foodId")
    .notNull()
    .references(() => foods.id, { onDelete: "cascade" }),
  description: text("description"),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Item = typeof items.$inferSelect;

export const stockLogs = sqliteTable("stock_logs", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  itemId: text("itemId")
    .notNull()
    .references(() => items.id),
  difference: integer("difference").notNull(),
  reason: text("reason", {
    enum: stockChangedReasonValues,
  }).$type<StockChangedReason>(),
  description: text("description"),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type StockLog = typeof stockLogs.$inferSelect;

export const pushSubscriptions = sqliteTable("push_subscriptions", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  endpoint: text("endpoint").notNull().unique(),
  p256dh: text("p256dh").notNull(),
  auth: text("auth").notNull(),
  userId: text("userId")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type PushSubscription = typeof pushSubscriptions.$inferSelect;

export const admins = sqliteTable("admins", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("userId")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  email: text("email").notNull().unique(),
  name: text("name"),
  role: text("role", { enum: adminRoleValues }).$type<AdminRole>().notNull(),
  organizationId: text("organizationId").references(() => organizations.id),
  eventId: text("eventId").references(() => events.id),
  storeId: text("storeId").references(() => stores.id),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Admin = typeof admins.$inferSelect;

export const staffs = sqliteTable("staffs", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("userId")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  email: text("email").notNull().unique(),
  name: text("name"),
  storeId: text("storeId")
    .notNull()
    .references(() => stores.id, { onDelete: "cascade" }),
  createdAt: integer("createdAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Staff = typeof staffs.$inferSelect;

export const storesRelations = relations(stores, ({ one, many }) => ({
  event: one(events, {
    fields: [stores.eventId],
    references: [events.id],
  }),
  attraction: one(attractions, {
    fields: [stores.id],
    references: [attractions.storeId],
  }),
  food: one(foods, {
    fields: [stores.id],
    references: [foods.storeId],
  }),
  admins: many(admins),
  staffs: many(staffs),
}));

export const attractionsRelations = relations(attractions, ({ one, many }) => ({
  store: one(stores, {
    fields: [attractions.storeId],
    references: [stores.id],
  }),
  tickets: many(tickets),
}));

export const foodsRelations = relations(foods, ({ one, many }) => ({
  store: one(stores, {
    fields: [foods.storeId],
    references: [stores.id],
  }),
  items: many(items),
}));
