import { integer, pgTable, primaryKey, text, uuid } from 'drizzle-orm/pg-core'
import type { AdapterAccount } from 'next-auth/adapters'

import users from './users'

const accounts = pgTable(
  'account',
  {
    userId: uuid('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccount>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state')
  },
  (account) => ({
    // define a compound key where the provider and providerAccountId are unique
    // such as any user from google can have only be one google user and have only one account id
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId]
    })
  })
)

export default accounts
