import { CircularProgress } from '@heroui/react'

// show is some async component is loading
export default function Loading() {
  return (
    <CircularProgress
      className="mx-auto mt-12"
      color="danger"
      size="lg"
      aria-label="Loading..."
    />
  )
}
