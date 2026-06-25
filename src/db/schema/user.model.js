const {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
} = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: serial("id").primaryKey(),

  name: varchar("name", { length: 100 }).notNull(),

  email: varchar("email", { length: 100 })
    .notNull()
    .unique(),

  password: text("password").notNull(),

  role: varchar("role", { length: 20 })
    .default("employee"),

  createdAt: timestamp("created_at")
    .defaultNow(),
});

module.exports = { users };