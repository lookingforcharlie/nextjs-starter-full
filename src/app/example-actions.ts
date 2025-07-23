'use server'

import { z } from 'zod'

// Zod schema for form validation
const messageSchema = z.object({
  message: z
    .string()
    .transform((str) => str.trim()) // Transform FIRST
    .pipe(
      z
        .string()
        .min(1, 'Message cannot be empty. Please enter a message.')
        .min(3, 'Message must be at least 3 characters long.')
    )
})

// Example action that works with FormData (like in your guestbook)
// Note: prevState is required by useActionState even if not used
export async function processFormAction(
  prevState: { message: string; error?: string } | undefined,
  formData: FormData
) {
  // Extract data from FormData
  const rawData = {
    message: formData.get('message') as string
  }

  // Validate using Zod
  const result = messageSchema.safeParse(rawData)

  if (!result.success) {
    // Return the first validation error
    const firstError = result.error.errors[0]
    return {
      message: '',
      error: firstError.message
    }
  }

  console.log('result', result)

  // If validation passes, use the validated and transformed data
  const { message } = result.data

  return {
    message: `You submitted: ${message}`,
    error: undefined
  }
}
