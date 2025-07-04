# Next.JS Starter Kit Full Version

- settings.json/.vscode, eslint, prettier, tailwind css, code cleanup.
- NextUI library

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

## HeroUI

```
npm install @heroui/react framer-motion
```

- Components can be used in Next.js server components
