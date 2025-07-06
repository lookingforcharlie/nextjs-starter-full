import { Card, CardBody } from '@heroui/react'
import { IconFileUnknown } from '@tabler/icons-react'

export default function NotFound() {
  return (
    <Card className="mx-auto mt-4 max-w-md">
      <CardBody className="flex flex-col items-center justify-center gap-4">
        <p className="text-lg font-bold">This page cannot be found.</p>
        <IconFileUnknown />
        <p className="text-sm text-gray-500">
          The page you are looking for does not exist.
        </p>
      </CardBody>
    </Card>
  )
}
