'use client'

import { useActionState, useEffect, useState } from 'react'

import { Button, Textarea } from '@heroui/react'
import { useFormStatus } from 'react-dom'

import { InsertGuestbookEntrySchema } from '../../db/schema/guestbook-entries'
import { createGuestbookEntry } from './actions'

export default function GuestbookClient() {
  const [lastResult, action] = useActionState(createGuestbookEntry, {
    message: '',
    error: ''
  })

  const { pending } = useFormStatus()
  const [message, setMessage] = useState('')
  const [validationError, setValidationError] = useState('')

  // Validate message on change
  const validateMessage = (value: string) => {
    const result = InsertGuestbookEntrySchema.safeParse({ message: value })
    if (!result.success) {
      setValidationError(result.error.errors[0].message)
    } else {
      setValidationError('')
    }
  }

  // Handle message change
  const handleMessageChange = (value: string) => {
    setMessage(value)
    validateMessage(value)
  }

  // Clear server error when user starts typing and input becomes valid
  useEffect(() => {
    if (message && !validationError && lastResult.error) {
      // Reset the server error by triggering a new action state
      // This is a bit tricky - we'll handle it by showing client validation instead
    }
  }, [message, validationError, lastResult.error])

  // Determine which error to show
  const errorToShow = validationError || (message ? '' : lastResult.error)
  const isInvalid = !!errorToShow

  return (
    <form className="mt-4 flex flex-col gap-4" action={action} noValidate>
      <Textarea
        className="w-full"
        label="Message"
        name="message"
        placeholder="Enter your message"
        value={message}
        onValueChange={handleMessageChange}
        isInvalid={isInvalid}
        errorMessage={errorToShow}
      />
      <Button type="submit" aria-disabled={pending || isInvalid}>
        Create
      </Button>
    </form>
  )
}
