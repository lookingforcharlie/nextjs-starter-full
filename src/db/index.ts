import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { env } from '../env/server'

// Purpose of index.ts, just to export the drizzle connection
// We will setup the migration in separate file

const queryClient = postgres(env.DATABASE_URL)
const db = drizzle({ client: queryClient })
// returns the number 1, it's commonly used to verify database connectivity\
// database operations are asynchronous
// const result = await db.execute('select 1')
// console.log('result', result)

export default db
