// only google auth provider for now
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { env } from '../env/server'

const authOptions: NextAuthOptions = {
  // you can customize all the pages for different options: https://next-auth.js.org/configuration/pages
  pages: {
    signIn: '/' // override the home page, because the sign in button in always in the navbar of home page
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
