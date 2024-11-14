import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'

/**
 * ESLint configuration file for a React TypeScript application.
 *
 * @fileoverview This configuration file sets up ESLint for a React TypeScript project.
 * It includes recommended configurations for JavaScript and TypeScript, specifies
 * the files to lint, and configures language options, plugins, and rules.
 *
 * @property {string[]} ignores - An array of directories or files to ignore during linting.
 * @property {string[]} extends - An array of configurations to extend, including recommended
 * configurations for JavaScript and TypeScript.
 * @property {string[]} files - An array of glob patterns specifying the files to lint.
 * @property {object} languageOptions - Configuration for language options, including ECMAScript
 * version and global variables.
 * @property {number} languageOptions.ecmaVersion - The ECMAScript version to use.
 * @property {object} languageOptions.globals - An object specifying global variables.
 * @property {object} plugins - An object specifying the plugins to use, including React Hooks
 * and React Refresh.
 * @property {object} rules - An object specifying the rules to apply, including recommended
 * rules for React Hooks and a custom rule for React Refresh.
 */
export default {
  ignores: ['dist'],
  extends: [js.configs.recommended, tseslint.configs.recommended],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
