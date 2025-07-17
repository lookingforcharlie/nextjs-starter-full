// re-export all the tables from the schema
// How to use this index.ts file: import { users, accounts, sessions } from './db/schema'

export { default as accounts } from './accounts'
export {
  default as guestbookEntries,
  guestbookEntriesRelations
} from './guestbook-entries'
export { default as sessions } from './sessions'
export { default as users } from './users'

// https://authjs.dev/getting-started/adapters/drizzle
// verificationTokens table is for email magic links
// authenticator table is new thing for Auth.js
