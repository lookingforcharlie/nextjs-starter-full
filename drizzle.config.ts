import { defineConfig } from 'drizzle-kit'

import { env } from './src/env/server'

// for creating schema and tables, run: npx drizzle-kit generate
// for migrations, run: npx drizzle-kit migrate
export default defineConfig({
  out: './src/db/migrations',
  dialect: 'postgresql',
  schema: './src/db/schema/index.ts',

  dbCredentials: {
    url: env.DATABASE_URL
  }
})

// some devs do not use migration folder, they just push everything into the database
