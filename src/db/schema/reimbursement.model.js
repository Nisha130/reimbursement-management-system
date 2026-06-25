const {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  numeric,
  timestamp,
} = require("drizzle-orm/pg-core");

const reimbursements = pgTable("reimbursements", {
  id: serial("id").primaryKey(),

  userId: integer("user_id").notNull(),

  title: varchar("title", {
    length: 255,
  }).notNull(),

  description: text("description"),

  amount: numeric("amount", {
    precision: 10,
    scale: 2,
  }).notNull(),

  status: varchar("status", {
    length: 20,
  }).default("pending"),

  createdAt: timestamp("created_at")
    .defaultNow(),
});

module.exports = { reimbursements };