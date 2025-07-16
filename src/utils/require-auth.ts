import { redirect } from 'next/navigation'

import { getServerSession } from 'next-auth'

import authOptions from '../config/auth'

export default async function requireAuth() {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    redirect('/')
  }
}

// any page that needs to be authenticated, we will call this function at the top of the component
// and if the user is not authenticated, we will redirect to the home page
// and if the user is authenticated, we will continue to render the component
// and we can use the session object in the component
