/**
 * Jest configuration file for a React TypeScript application.
 *
 * @module
 * @property {string} preset - Specifies the preset configuration for Jest. In this case, it uses 'ts-jest' for TypeScript support.
 * @property {string} testEnvironment - Defines the test environment that will be used for testing. 'jsdom' simulates a browser environment.
 * @property {Object} moduleNameMapper - A map from regular expressions to module names that allow stubbing out resources, such as stylesheets.
 * @property {Object} transform - A map from regular expressions to transformer modules that process files before testing. Here, 'ts-jest' is used to transform TypeScript files.
 * @property {string[]} extensionsToTreatAsEsm - An array of file extensions that should be treated as ECMAScript modules.
 */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
	extensionsToTreatAsEsm: ['.ts', '.tsx']
};
