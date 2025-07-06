import { Card, CardBody } from '@heroui/react'

export default function Home() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Next.JS Starter</h1>
        <p className="text-sm text-gray-500">
          This is a simple starter template for Next.JS.
        </p>
      </CardBody>
    </Card>
  )
}
