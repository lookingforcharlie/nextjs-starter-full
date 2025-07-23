'use client'

import { useActionState, useEffect, useState } from 'react'

import { Button, Card, CardBody, CardHeader, Textarea } from '@heroui/react'

import { processFormAction } from '../example-actions'

export default function ExamplesPage() {
  // Local state for form message and error clearing
  const [messageValue, setMessageValue] = useState('')
  const [showError, setShowError] = useState(true)

  // Method 3: Using useActionState for form handling
  // useActionState is used to be called useFormState
  // processFormAction is the server action that will be called when the form is submitted
  // { message: '' } is the initial state of the form
  const [formResult, formAction] = useActionState(processFormAction, {
    message: '',
    error: undefined
  })

  // Handle input change to clear errors when user starts typing
  const handleMessageChange = (value: string) => {
    setMessageValue(value)
    // Clear error display when user starts typing
    if (formResult?.error && showError) {
      setShowError(false)
    }
  }

  // Custom form action wrapper to reset error display on submit
  const handleFormSubmit = (formData: FormData) => {
    setShowError(true) // Show errors on submit
    formAction(formData)
  }

  // Clear form when submission is successful
  useEffect(() => {
    if (formResult?.message && !formResult?.error) {
      setMessageValue('')
    }
  }, [formResult])

  return (
    <div className="container mx-auto mt-10 max-w-4xl space-y-6 p-4">
      {/* Method 3: Form with Action */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">
            Handle Form using Server Actions
          </h2>
        </CardHeader>
        <CardBody>
          <p className="mb-4 text-gray-600">
            Use server action as form action (like your guestbook):
          </p>
          <form action={handleFormSubmit} className="space-y-4">
            <Textarea
              name="message"
              label="Message"
              placeholder="Enter a message to submit via form (minimum 3 characters)"
              value={messageValue}
              onValueChange={handleMessageChange}
              isInvalid={!!(formResult?.error && showError)}
              errorMessage={showError ? formResult?.error : undefined}
            />
            <Button type="submit" color="success" className="w-full">
              Submit Form
            </Button>
          </form>
          {formResult?.message && !formResult?.error && (
            <div className="mt-4 rounded-lg bg-green-100 p-3 dark:bg-green-900">
              <p className="text-green-800 dark:text-green-200">
                Form Result: {formResult.message}
              </p>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  )
}
