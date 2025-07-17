import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { env } from '../env/server'
import * as schema from './schema'

// Purpose of index.ts, just to export the drizzle connection
// We will setup the migration in separate file

// set max: 1 only if we are migrating
export const client = postgres(env.DATABASE_URL, {
  max: env.DB_MIGRATING ? 1 : undefined
})
const db = drizzle(client, {
  schema
})

// returns the number 1, it's commonly used to verify database connectivity\
// database operations are asynchronous
// const result = await db.execute('select 1')
// console.log('result', result)

export default db
