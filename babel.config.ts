/**
 * Babel configuration file.
 *
 * This configuration file is used to set up Babel for a React and TypeScript project.
 * It specifies the presets to be used by Babel for transpiling the code.
 *
 * @module babel.config
 * @property {Array} presets - An array of presets used by Babel.
 * @property {Array} presets[0] - The '@babel/preset-env' preset with a target configuration for the current Node.js version.
 * @property {string} presets[1] - The '@babel/preset-typescript' preset for transpiling TypeScript code.
 * @property {string} presets[2] - The '@babel/preset-react' preset for transpiling React JSX syntax.
 */
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
};