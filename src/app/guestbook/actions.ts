'use server'

// action.ts
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { getServerSession } from 'next-auth'

import guestbookEntries, {
  InsertGuestbookEntrySchema
} from '@/db/schema/guestbook-entries'

import authOptions from '../../config/auth'
import db from '../../db'
import requireAuth from '../../utils/require-auth'

export async function createGuestbookEntry(
  prevState: unknown,
  formData: FormData
) {
  await requireAuth()
  // const submission = parseWithZod(formData, {
  //   // The issue occurs because createInsertSchema from drizzle-zod generates schemas that don't properly implement the full Zod interface that Conform expects
  //   schema: InsertGuestbookEntrySchema
  // })

  // if (submission.status !== 'success') {
  //   return submission.reply()
  // }

  // use the zod schema to validate the form data
  const result = InsertGuestbookEntrySchema.safeParse({
    message: formData.get('message') as string
  })

  // result by zod schema: { success: true, data: { message: 'hello zod' } }

  if (!result.success) {
    return {
      message: '',
      error: result.error.errors[0].message
    }
  }

  // we know that the user is authenticated, so we can use ! to tell TypeScript that the session is not null
  const session = (await getServerSession(authOptions))!

  // Insert the data into the database
  try {
    await db.insert(guestbookEntries).values({
      message: result.data.message,
      userId: session.user.id
    })

    // data for this path has changed, so we need to revalidate the path
    revalidatePath('/guestbook')
    redirect('/guestbook')
  } catch (error) {
    console.error('Error inserting guestbook entry:', error)
    return {
      message: '',
      error: 'Failed to add your message. Please try again.'
    }
  }
}
