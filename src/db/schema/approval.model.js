const {
  pgTable,
  serial,
  integer,
  varchar,
  text,
  timestamp,
} = require("drizzle-orm/pg-core");

const approvals = pgTable("approvals", {
  id: serial("id").primaryKey(),

  reimbursementId: integer("reimbursement_id")
    .notNull(),

  managerId: integer("manager_id")
    .notNull(),

  status: varchar("status", {
    length: 20,
  }),

  remarks: text("remarks"),

  createdAt: timestamp("created_at")
    .defaultNow(),
});

module.exports = { approvals };