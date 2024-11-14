import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
/**
 * Vite configuration file.
 *
 * This configuration file sets up the Vite development server and testing environment for a React TypeScript application.
 *
 * @fileoverview Vite configuration for the example React TypeScript app.
 *
 * @property {Array} plugins - An array of plugins to use with Vite. In this case, it includes the React plugin.
 * @property {Object} server - Configuration options for the Vite development server.
 * @property {boolean} server.open - Automatically open the app in the browser when the server starts.
 * @property {Object} test - Configuration options for the testing environment.
 * @property {boolean} test.globals - Enable global variables for testing.
 * @property {string} test.environment - The environment in which to run the tests. Here, it is set to "jsdom".
 * @property {string} test.setupFiles - Path to the setup files for the testing environment.
 * @property {boolean} test.mockReset - Automatically reset mocks between tests.
 */
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
});
