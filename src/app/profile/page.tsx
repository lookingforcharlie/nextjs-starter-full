import { env } from '@/env/server'

export default function Profile() {
  console.log(env.DATABASE_URL)
  return (
    <div>
      <h1>Profile in the app folder</h1>
      <p>DATABASE_URL: {env.DATABASE_URL}</p>
      <p>NODE_ENV: {env.NODE_ENV}</p>
      {/* <p>env.PORT: {env.PORT}</p>
      <p>env.HOSTNAME: {env.HOSTNAME}</p> */}
    </div>
  )
}
