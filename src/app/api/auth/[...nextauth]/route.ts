import NextAuth from 'next-auth'

import authOptions from '@/config/auth'

// api/auth
// config NextAuth in auth.ts
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
