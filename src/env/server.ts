import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

// createEnv loads the environment variables from the .env file
// and validates them during runtime using the zod schema
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'production']),
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    DB_HOST: z.string(),
    DB_PORT: z.coerce.number(), // In .env, port is defined as string, so we need to coerce it to number
    DB_USER: z.string(),
    DB_PASSWORD: z.string(),
    DB_NAME: z.string(),
    DATABASE_URL: z.string().url()
  },

  // throw an error if a variable is empty
  emptyStringAsUndefined: true,
  // If you're using Next.js < 13.4.4, you'll need to specify the runtimeEnv manually
  // runtimeEnv: {
  //   DATABASE_URL: process.env.DATABASE_URL,
  //   OPEN_AI_API_KEY: process.env.OPEN_AI_API_KEY,
  // },
  // For Next.js >= 13.4.4, you can just reference process.env:

  // The only place where we can access process.env
  // eslint-disable-next-line n/no-process-env
  experimental__runtimeEnv: process.env
})
