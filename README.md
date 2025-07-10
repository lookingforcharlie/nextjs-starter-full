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
