import { boolean, integer, json, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  subscriptionId: varchar(),
});

export const coursesTable = pgTable("courses", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseName: varchar({ length: 255 }),
  courseDescription: varchar({ length: 2555 }).notNull(),
  nOfChapter: integer().notNull(),
  lavel: varchar().notNull(),
  catgory: varchar().notNull(),
  target: varchar().notNull(),
  includeVideo: boolean().default(false),
  courseJson: json(),
  userEmail : varchar('userEmail').references(()=> usersTable.email)
});
