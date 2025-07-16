# Next.JS Starter Kit Full Version

- [Inspired by](https://github.com/w3cj/next-start)
- [Other Starters](https://gist.github.com/w3cj/4fa5180fec37ececf0fceec0e3fcc8ab)

## [Setup prettier for formatting](https://nextjs.org/docs/app/api-reference/config/eslint)

```
npm install --save-dev eslint-config-prettier
```

- disable the eslint rules that conflict with the formatting rules
- Create .prettierrc.json

## Setup some eslint.config rules

- Anonymous callback will always be arrow function

## Create .settings.json in folder of .vscode

- all the developers on this project will have the exact same settings

## [Prettier plugin organize import](https://github.com/trivago/prettier-plugin-sort-imports)

```
npm install --save-dev @trivago/prettier-plugin-sort-imports
```

```
"importOrder": [
    "^(react|next?/?([a-zA-Z/]*))$", // if import comes from react or next or / with anything, at the top of the file
    "<THIRD_PARTY_MODULES>", // after that is any modules installed from npm
    "^@/(.*)$", // alias imports
    "^[./]" // relative paths
  ],
```

## [Sort Tailwind CSS class content](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)

```
npm install -D prettier prettier-plugin-tailwindcss
```

- .prettierrc.json is prettier configuration file

## Update script in package.json

```
"format": "prettier src/ --write ." // overwrite all the files with formatted files
```

## [In Next.js application, always use kebab-case](https://nextjs-faq.com/module-not-found-due-to-case-sensitivity)

- example-thing.tsx

## [Convention when develop Next.js application](https://github.com/alan2207/bulletproof-react?tab=readme-ov-file)

## TypeScript version

- Inside VS Code, open a .ts or .tsx file, you will see the typescript button in the bottom bar
- Shift + CMD + p, type 'typescript', choose 'Use workspace version'

## [Use a emoji as a favicon](https://css-tricks.com/emoji-as-a-favicon/)

## Tailwind CSS V4

- We don't need tailwind.config.js file no more in V4

# --- Basic Stops Here ---

## HeroUI

- [How to work with Tailwind CSS V4](https://www.heroui.com/docs/guide/tailwind-v4)

  ```
  // manually installation
  npm install @heroui/react@beta framer-motion

  //Create hero.ts

  // Delete tailwind.config.js

  // @hero.ts in globals.css file
  ```

- Components can be used in Next.js server components

## Create basic layout

- Pick a Navbar and a main area

## [Bug of HeroUI Link](https://github.com/heroui-inc/heroui/issues/3572)

- Link imports from '@heroui/react' actually reload the whole page instead of running as a single page application
- There is no solution so far, just use Link from 'next/link', don't use Link from '@heroui/react'

## [tabler as Icon library](https://tabler.io/icons)

## HeroUI using next-themes package to handle dark and light mode

```
npm install next-themes
```

- next-themes saves the them in localstorage

- When user launches the page, will see system theme first without toggling

## [Background Generator](https://www.fffuel.co/)

## [Environment Variables Validation](https://env.t3.gg/docs/nextjs)

```
npm install @t3-oss/env-nextjs zod
```

-

## [jiti](https://www.npmjs.com/package/jiti): doesn't work in the project

- No build step needed: Load TS or ESM directly during runtime.
- Set up in next.config.ts to validation env file in the beginning

## [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n)

- Prevent access process.env in the codebase

## [Next Auth for authentication](https://next-auth.js.org/)

- npm install next-auth
- Set up an API route
- Create Google OAuth in google console
- [Add redirect uri](https://next-auth.js.org/providers/google)

## [Setup NextAuth when using Next.js app router](https://next-auth.js.org/configuration/initialization#route-handlers-app)

## Use Dropdown menu with Custom Trigger from HeroUI to create sign in and sign out menu

## [We need to add NEXTAUTH_URL and NEXTAUTH_SECRET to use getServerSession function in server component](https://next-auth.js.org/configuration/options#environment-variables)

- NEXTAUTH_URL and NEXTAUTH_SECRET for generating JWT
- NEXTAUTH_URL needs to be set up a real url when deploy to cloud

## [Using middleware from NextAuth to protect page](https://next-auth.js.org/configuration/nextjs#middleware)

## [Using Drizzle as NextAuth.js Adapter to connect DB](https://authjs.dev/getting-started/adapters/drizzle)w

- [Locally, we use Postgres.js as the driver of Drizzle to connect Postgres in Docker](https://orm.drizzle.team/docs/get-started-postgresql#postgresjs)

```
npm i drizzle-orm postgres
npm i -D drizzle-kit
```

## Environment Variables for DB connection

- Since we have docker for Postgres, we set up a separate environment variable for every part of connection string.

## Create docker compose yml file for Postgres

run

```
docker compose up
or
docker compose up -d
```

## Define the table and schema using Drizzle

- NextAuth has template schema of user, account and session tables

```
// We create schema and tables first, run:
npx drizzle-kit generate
// then migrate to database, run: (push or migrate? need to confirm )
npx drizzle-kit push
// You can check the table in real time, run:
npx drizzle-kit studio

// Or you can migrate everything to database directly without running npx drizzle-kit generate
```

## Install cross env package

- In package.json script, "db:migrate": "DB_MIGRATING=true npx drizzle-kit migrate" only works in MacOS and linux
- cross env makes it work on Windows OS

```
npm i -D cross-env
```

- change the script to "db:migrate": "cross-env DB_MIGRATING=true npx drizzle-kit migrate"

## [Link the tables to NextAuth: setup the adapter](https://authjs.dev/getting-started/adapters/drizzle?framework=Next.js)

```
npm install @auth/drizzle-adapter
```

## [Database migration](https://orm.drizzle.team/docs/migrations)

- Option 1: push db changes directly

```
// Update the schemas or tables, use push won't generate migration file
npx drizzle-kit push
```

- Option 2: you can just delete migrations folder, generate and migrate

```
// generate SQL migration files
npx drizzle-kit generate

// apply them to the database
npm run db:migrate
```

- Restart the studio to confirm the change

```
npx drizzle-kit studio
// you will see schema or table changed
```

## At this point, redirect to /profile doesn't work

- delete the middleware.ts file we created
- Create a help function that will check to see are we logged in, and if not we will redirect the user and any page that needs t obe authenticated is always call that function at the top the component.

## [npm package conform: form validation library for React](https://conform.guide/integration/nextjs)

- Define schema first
- Use the schema in the action

## npm i drizzle-zod

- drizzle-zod allows you pass in the drizzle table and give you back a zod schema
