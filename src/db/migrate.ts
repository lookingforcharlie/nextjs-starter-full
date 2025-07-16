// this file is used to migrate the database: "db:migrate": "cross-env DB_MIGRATING=true npx drizzle-kit migrate"
import { migrate } from 'drizzle-orm/postgres-js/migrator'

import drizzleConfig from '../../drizzle.config'
import { env } from '../env/server'
import db, { client } from './'

if (!env.DB_MIGRATING) {
  throw new Error('You must set DB_MIGRATING to true to run migrations')
}

await migrate(db, { migrationsFolder: drizzleConfig.out! })

await client.end()
