module.exports = {
  preset: 'jest-puppeteer',
  testRegex: './*\\.test\\.js$',
  setupFiles: ['<rootDir>/node_modules/regenerator-runtime/runtime'],
  setupFilesAfterEnv: ['./src/setupTests.js'],
};
