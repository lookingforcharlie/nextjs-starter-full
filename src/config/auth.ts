// only google auth provider for now
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import db from '../db'
import { env } from '../env/server'

const authOptions: NextAuthOptions = {
  // you can customize all the pages for different options: https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/' // override the home page, because the sign in button in always in the navbar of home page
  },
  // NextAuth uses this database connection to put users into the database and create sessions
  adapter: DrizzleAdapter(db),
  callbacks: {
    // user from the database
    // whenever a user logs in, the id property will be also on the session object
    session: async ({ session, user }) => {
      session.user.id = user.id
      return session
    }
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET
    })
    // ...add more providers here
  ]
}

export default authOptions
