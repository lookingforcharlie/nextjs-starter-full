// Create a table for guestbook entries
import { relations } from 'drizzle-orm'
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
// import { createInsertSchema } from 'drizzle-zod'

// import z from 'zod'

import z from 'zod'

import users from './users'

const guestbookEntries = pgTable('guestbook_entries', {
  id: uuid('id').primaryKey().defaultRandom(), // Add this line
  userId: uuid('userId')
    .references(() => users.id, { onDelete: 'cascade' })
    .notNull(),
  message: text('message').notNull(),
  // createdAt is JavaScript property name, created_at is SQL column name
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow()
})

// define a relation between the guestbookEntries table and the users table
// With these relations, I can query for a guestbookEntry, and I can also include the user object along with it
export const guestbookEntriesRelations = relations(
  guestbookEntries,
  ({ one }) => ({
    // users is the table name
    user: one(users, {
      fields: [guestbookEntries.userId],
      references: [users.id]
    })
  })
)

// give back a zod validator
// When validating the message send to my server, I really only look for message. uuid will be generated on the server side, createdAt will be generated on the server side, userId will be generated on the server side, so I don't need to validate them.

// createInsertSchema does not work with Conform, so we need to use a manual Zod schema
// export const InsertGuestbookEntrySchema = createInsertSchema(
//   guestbookEntries
// ).omit({ userId: true, createdAt: true })

// The issue occurs because createInsertSchema from drizzle-zod generates schemas that don't properly implement the full Zod interface that Conform expects

// Manual Zod schema - this will work with Conform
export const InsertGuestbookEntrySchema = z.object({
  message: z.string().min(1, 'Message is required').trim()
})

export default guestbookEntries

// Now we need a zod schema corresponding to the guestbookEntries table
