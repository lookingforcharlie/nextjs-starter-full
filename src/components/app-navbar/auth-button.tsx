import {
  Avatar,
  Button,
  CircularProgress,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@heroui/react'
import { IconBrandGoogle } from '@tabler/icons-react'
import { signIn, signOut, useSession } from 'next-auth/react'

// minimal is used to determine if it shows only 'Sign Out' button or a dropdown menu with more options
// minimal will be called optionally from other components, set to true by default
export function AuthButton({ minimal = true }: { minimal?: boolean }) {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <CircularProgress />
  }

  if (status === 'authenticated') {
    // When in the navbar menu with small screen, show only 'Sign Out' button
    if (minimal) {
      return (
        <Button onPress={() => signOut()} color="danger" variant="ghost">
          Sign Out
        </Button>
      )
    }
    // When in the main navbar, show a dropdown menu with more options
    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback={!session.user?.image}
            // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            src={session.user?.image || ''}
            size="sm"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{session.user?.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="sign-out" color="danger" onPress={() => signOut()}>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }

  return (
    <>
      <Button onPress={() => signIn('google')} color="danger" variant="ghost">
        <IconBrandGoogle />
        Sign In
      </Button>
    </>
  )
}

// This is how session looks like
// {
//   "user": {
//       "name": "Char",
//       "email": "char@gmail.com",
//       "image": "https://lh3.googleusercontent.com/a/ACg8ocJtfiHISyvNo9bGTrF2DlIp5JHmUYT1_s7OAXQgmqLM=s96-c"
//   },
//   "expires": "2025-08-07T03:09:18.784Z"
// }
