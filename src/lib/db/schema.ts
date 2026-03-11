import { createId } from "@paralleldrive/cuid2";
import { relations } from "drizzle-orm";
import {
  boolean,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  unique,
  varchar,
} from "drizzle-orm/pg-core";

export const storeTypeEnum = pgEnum("StoreType", ["ATTRACTION", "FOOD"]);
export type StoreType = (typeof storeTypeEnum.enumValues)[number];

export const ticketStatusEnum = pgEnum("TicketStatus", [
  "ISSUED",
  "CALLED",
  "COMPLETED",
  "CANCELED",
]);
export type TicketStatus = (typeof ticketStatusEnum.enumValues)[number];

export const stockChangedReasonEnum = pgEnum("StockChangedReason", ["SELLING"]);
export type StockChangedReason =
  (typeof stockChangedReasonEnum.enumValues)[number];

export const adminRoleEnum = pgEnum("AdminRole", [
  "SYSTEM_ADMIN",
  "ORGANIZATION_ADMIN",
  "EVENT_ADMIN",
  "STORE_ADMIN",
]);
export type AdminRole = (typeof adminRoleEnum.enumValues)[number];

export const users = pgTable(
  "user",
  {
    id: text("id").primaryKey(),
    name: text("name"),
    email: text("email").notNull(),
    emailVerified: boolean("emailVerified").notNull(),
    image: text("image"),
    isAnonymous: boolean("isAnonymous"),
    role: text("role").notNull().default("user"),
    createdAt: timestamp("createdAt", { mode: "date" }).notNull(),
    updatedAt: timestamp("updatedAt", { mode: "date" }).notNull(),
  },
  (table) => [unique("user_email_key").on(table.email)],
);

export const sessions = pgTable(
  "session",
  {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expiresAt", { mode: "date" }).notNull(),
    token: text("token").notNull(),
    createdAt: timestamp("createdAt", { mode: "date" }).notNull(),
    updatedAt: timestamp("updatedAt", { mode: "date" }).notNull(),
    ipAddress: text("ipAddress"),
    userAgent: text("userAgent"),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
  },
  (table) => [unique("session_token_key").on(table.token)],
);

export const accounts = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt", { mode: "date" }),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt", { mode: "date" }),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull(),
});

export const verifications = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt", { mode: "date" }).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }),
  updatedAt: timestamp("updatedAt", { mode: "date" }),
});

export const organizations = pgTable("organizations", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  slug: varchar("slug", { length: 20 }).notNull().unique(),
  name: varchar("name", { length: 20 }).notNull(),
  description: text("description"),
  inviteCode: varchar("inviteCode", { length: 20 }).notNull(),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
});
export type Organization = typeof organizations.$inferSelect;

export const events = pgTable("events", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  slug: text("slug").notNull().unique(),
  name: varchar("name", { length: 20 }).notNull(),
  isActive: boolean("isActive").notNull().default(false),
  startedAt: timestamp("startedAt", { mode: "date" }),
  finishedAt: timestamp("finishedAt", { mode: "date" }),
  description: text("description"),
  organizationId: text("organizationId").references(() => organizations.id),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
});

export type Event = typeof events.$inferSelect;

export const stores = pgTable("stores", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  slug: varchar("slug", { length: 20 }).notNull().unique(),
  name: varchar("name", { length: 20 }).notNull(),
  isActive: boolean("isActive").notNull().default(false),
  startedAt: timestamp("startedAt", { mode: "date" }),
  finishedAt: timestamp("finishedAt", { mode: "date" }),
  description: text("description"),
  storeType: storeTypeEnum("storeType").notNull(),
  eventId: text("eventId").references(() => events.id),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
});

export type Store = typeof stores.$inferSelect;

export const attractions = pgTable("attracions", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  playTime: integer("playTime").default(5),
  peopleCapacity: integer("peopleCapacity").notNull().default(5),
  storeId: text("storeId")
    .notNull()
    .unique()
    .references(() => stores.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
});

export type Attraction = typeof attractions.$inferSelect;

export const foods = pgTable("foods", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  storeId: text("storeId")
    .notNull()
    .unique()
    .references(() => stores.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
});

export type Food = typeof foods.$inferSelect;

export const tickets = pgTable("tickets", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  index: integer("index").notNull(),
  numberOfPeople: integer("numberOfPeople").notNull(),
  status: ticketStatusEnum("status").notNull().default("ISSUED"),
  isPaper: boolean("isPaper").notNull().default(false),
  attractionId: text("attractionId")
    .notNull()
    .references(() => attractions.id),
  userId: text("userId")
    .notNull()
    .references(() => users.id),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
});

export type Ticket = typeof tickets.$inferSelect;

export const items = pgTable("items", {
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
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
});

export type Item = typeof items.$inferSelect;

export const stockLogs = pgTable("stock_logs", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  itemId: text("itemId")
    .notNull()
    .references(() => items.id),
  difference: integer("difference").notNull(),
  reason: stockChangedReasonEnum("reason"),
  description: text("description"),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
});

export type StockLog = typeof stockLogs.$inferSelect;

export const pushSubscriptions = pgTable("push_subscriptions", {
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
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
});

export type PushSubscription = typeof pushSubscriptions.$inferSelect;

export const admins = pgTable("admins", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("userId")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  email: text("email").notNull().unique(),
  name: varchar("name", { length: 20 }),
  role: adminRoleEnum("role").notNull(),
  organizationId: text("organizationId").references(() => organizations.id),
  eventId: text("eventId").references(() => events.id),
  storeId: text("storeId").references(() => stores.id),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
});

export type Admin = typeof admins.$inferSelect;

export const staffs = pgTable("staffs", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  userId: text("userId")
    .notNull()
    .unique()
    .references(() => users.id, { onDelete: "cascade" }),
  email: text("email").notNull().unique(),
  name: varchar("name", { length: 20 }),
  storeId: text("storeId")
    .notNull()
    .references(() => stores.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt", { mode: "date" }).notNull().defaultNow(),
  updatedAt: timestamp("updatedAt", { mode: "date" }).notNull().defaultNow(),
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
