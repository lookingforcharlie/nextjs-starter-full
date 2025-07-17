'use server'

// action.ts
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { parseWithZod } from '@conform-to/zod'
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
  const submission = parseWithZod(formData, {
    // The issue occurs because createInsertSchema from drizzle-zod generates schemas that don't properly implement the full Zod interface that Conform expects
    schema: InsertGuestbookEntrySchema
  })

  if (submission.status !== 'success') {
    return submission.reply()
  }

  // we know that the user is authenticated, so we can use ! to tell TypeScript that the session is not null
  const session = (await getServerSession(authOptions))!

  // Insert the data into the database
  await db.insert(guestbookEntries).values({
    message: submission.value.message,
    userId: session.user.id
  })

  // data for this path has changed, so we need to revalidate the path
  revalidatePath('/guestbook')
  redirect('/guestbook')
}
