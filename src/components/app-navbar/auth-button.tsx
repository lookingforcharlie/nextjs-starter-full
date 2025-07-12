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
  const { data, status } = useSession()

  const signOutClick = () => {
    signOut({
      callbackUrl: '/'
    })
  }

  if (status === 'loading') {
    return <CircularProgress aria-label="Loading authentication status" />
  }

  if (status === 'authenticated') {
    // When in the navbar menu with small screen, show only 'Sign Out' button
    if (minimal) {
      return (
        <Button onPress={signOutClick} color="danger" variant="ghost">
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
            showFallback={!data.user?.image}
            // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            src={data.user?.image || ''}
            size="sm"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem
            key="profile"
            className="h-14 gap-2"
            textValue={`Signed in as ${data.user?.email}`}
          >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{data.user?.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="sign-out" color="danger" onPress={signOutClick}>
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }

  return (
    <>
      <Button
        onPress={() =>
          signIn('google', {
            callbackUrl: '/profile' // specify the page to redirect to after sign in
          })
        }
        color="danger"
        variant="ghost"
      >
        <IconBrandGoogle />
        Sign In
      </Button>
    </>
  )
}

// This is how data looks like
// {
//   "user": {
//       "name": "Char",
//       "email": "char@gmail.com",
//       "image": "https://lh3.googleusercontent.com/a/ACg8ocJtfiHISyvNo9bGTrF2DlIp5JHmUYT1_s7OAXQgmqLM=s96-c"
//   },
//   "expires": "2025-08-07T03:09:18.784Z"
// }
