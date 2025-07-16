import { Card, CardBody, User } from '@heroui/react'
import { getServerSession } from 'next-auth'

import authOptions from '../../config/auth'
import requireAuth from '../../utils/require-auth'

// Server component you can use getServerSession to get the session
export default async function Profile() {
  // setup suspense boundary to show loading state

  // simulate a delay to show profile page
  // await new Promise((resolve) => setTimeout(resolve, 2000))

  await requireAuth()

  // requireAuth already checks if the user is authenticated, so we are sure we will get the session at this point
  const session = (await getServerSession(authOptions))!
  console.log('session', session)

  return (
    <div>
      <Card className="mx-auto mt-10 max-w-md">
        <CardBody>
          <User
            name={session.user?.name}
            description={session.user?.email}
            avatarProps={{
              showFallback: !session.user?.image,
              src: session.user?.image || ''
            }}
          />
        </CardBody>
      </Card>
    </div>
  )
}
