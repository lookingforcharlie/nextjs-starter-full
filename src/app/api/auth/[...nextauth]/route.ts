import NextAuth from 'next-auth'

import authOptions from '@/config/auth'

// When you define a /app/api/auth/[...nextauth] route.ts file, you instruct NextAuth.js that every API request beginning with /api/auth/* should be handled by the code written in the [...nextauth]/route.ts file. This is a catch-all route.

// config NextAuth in auth.ts
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// Your route.ts creates ALL of these endpoints automatically:
// /api/auth/signin
// /api/auth/signout
// /api/auth/session  ← This one!
// /api/auth/csrf
// /api/auth/providers
// /api/auth/callback/[provider]
// you can check the endpoints via http://localhost:3000/api/auth/session
