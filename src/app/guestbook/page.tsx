import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@heroui/react'
import { desc } from 'drizzle-orm'

import requireAuth from '@/utils/require-auth'

import db from '../../db'
import { guestbookEntries } from '../../db/schema'
import GuestbookClient from './page.client'

export default async function Guestbook() {
  await requireAuth()
  // db.query has all the schema interfaces, because we defined the schema in the schema/index.ts file
  const entries = await db.query.guestbookEntries.findMany({
    // order by createdAt in descending order
    orderBy: [desc(guestbookEntries.createdAt)],
    // every time we query for a guestbook entry, we also want to include the user object
    // this is possible because we defined the relations in the guestbook-entries.ts file
    with: {
      user: true
    }
  })
  return (
    <Card className="mx-auto mt-10 max-w-lg">
      <CardBody>
        <h1 className="text-center text-2xl">Welcome to the guestbook</h1>
        <GuestbookClient />
        {entries.map((entry) => {
          return (
            <Card className="mt-4" key={entry.id}>
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src={entry.user.image}
                  />
                  <div className="flex flex-col items-start justify-center gap-1">
                    <h4 className="text-small text-default-600 leading-none font-semibold">
                      {entry.user.name}
                    </h4>
                    <h5 className="text-small text-default-400 tracking-tight">
                      @{entry.user.email}
                    </h5>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="text-small text-default-400 px-3 py-0">
                <p>{entry.message}</p>
              </CardBody>
              <CardFooter className="gap-3">
                <div className="flex gap-1">
                  <p className="text-default-400 text-small">
                    {/* use toLocaleString() instead of toLocalDateString() */}
                    {entry.createdAt.toLocaleString()}
                  </p>
                </div>
              </CardFooter>
            </Card>
          )
        })}
      </CardBody>
    </Card>
  )
}
