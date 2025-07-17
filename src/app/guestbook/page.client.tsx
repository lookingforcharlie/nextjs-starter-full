'use client'

import { useActionState } from 'react'

import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import { Button, Textarea } from '@heroui/react'

import { InsertGuestbookEntrySchema } from '../../db/schema/guestbook-entries'
import { createGuestbookEntry } from './actions'

export default function GuestbookClient() {
  // createGuestbookEntry is the action function that we want to call
  // const [lastResult, action] = useFormState(createGuestbookEntry, undefined)
  const [lastResult, action] = useActionState(createGuestbookEntry, undefined)
  const [form, fields] = useForm({
    // Sync the result of last submission
    lastResult,

    // Reuse the validation logic on the client
    onValidate({ formData }) {
      return parseWithZod(formData, {
        schema: InsertGuestbookEntrySchema
      })
    },

    // Validate the form on blur event triggered
    shouldValidate: 'onBlur',
    shouldRevalidate: 'onInput'
  })
  return (
    <form
      className="mt-4 flex flex-col gap-4"
      id={form.id}
      onSubmit={form.onSubmit}
      action={action}
      noValidate
    >
      <Textarea
        className="w-full"
        label="Message"
        key={fields.message.key}
        name={fields.message.name}
        placeholder="Enter your message"
        isInvalid={!fields.message.valid}
        errorMessage={fields.message.errors}
      />
      <Button type="submit">Create</Button>
      <p>{fields.message.errors}</p>
    </form>
  )
}
