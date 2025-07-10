export { default } from 'next-auth/middleware'

// redirect to sign in page if user is not authenticated and trying to access /profile page
export const config = { matcher: ['/profile'] }
