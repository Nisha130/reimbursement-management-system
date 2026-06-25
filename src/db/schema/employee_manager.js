const {
  pgTable,
  serial,
  integer,
  timestamp,
} = require("drizzle-orm/pg-core");

const employeeManager = pgTable("employee_manager", {
  id: serial("id").primaryKey(),

  employeeId: integer("employee_id")
    .notNull(),

  managerId: integer("manager_id")
    .notNull(),

  createdAt: timestamp("created_at")
    .defaultNow(),
});

module.exports = { employeeManager };