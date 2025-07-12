import { Card, CardBody } from '@heroui/react'

import db from '@/db'

export default async function Home() {
  const result = await db.execute('select 1')
  // const result = await db.execute(sql`SELECT * FROM pg_catalog.pg_tables`)
  console.log('result', result)
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Next.JS Starter</h1>
        <p className="text-sm text-gray-500">
          This is a simple starter template for Next.JS.
        </p>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </CardBody>
    </Card>
  )
}
