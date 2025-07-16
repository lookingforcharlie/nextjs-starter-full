import { Button, Card, CardBody, Textarea } from '@heroui/react'

import requireAuth from '@/utils/require-auth'

export default async function Guestbook() {
  await requireAuth()
  return (
    <Card className="mx-auto mt-10 max-w-lg">
      <CardBody>
        <h1 className="text-center text-2xl">Welcome to the guestbook</h1>
        <form className="mt-4 flex flex-col gap-4">
          <Textarea
            className="w-full"
            label="Message"
            placeholder="Enter your message"
          />
          <Button type="submit">Create</Button>
        </form>
      </CardBody>
    </Card>
  )
}
