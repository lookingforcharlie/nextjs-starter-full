import { pgTable, timestamp, uuid, varchar } from 'drizzle-orm/pg-core'

const users = pgTable('user', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 320 }).notNull().unique(),
  // error during sign in if set emailVerified to notNull, maybe because of NextAuth
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: varchar('image', { length: 2048 }).notNull()
})

export default users
