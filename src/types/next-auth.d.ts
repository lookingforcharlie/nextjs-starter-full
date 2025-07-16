// override the session type
import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
  }
}

// user will have all the properties of DefaultSession['user'], and we also add id onto it
