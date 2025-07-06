import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'prettier'],
    plugins: ['n'],
    rules: {
      'prefer-arrow-callback': 'error', // Anonymous callback will always be arrow function
      'prefer-template': 'error', // Use template literals instead of string concatenation
      'n/no-process-env': 'error' // Prevent access process.env in the codebase
    }
  })
]

export default eslintConfig
