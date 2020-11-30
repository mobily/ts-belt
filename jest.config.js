module.exports = {
  verbose: true,
  bail: true,
  transform: {
    '^.+\\.ts': 'ts-jest',
  },
  testRegex: './__tests__/.+\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'js'],
  collectCoverage: true,
  rootDir: __dirname,
  moduleNameMapper: {
    '@mobily/ts-belt/(.*)': '<rootDir>/src/$1',
    '@mobily/ts-belt': '<rootDir>/src',
  }
}
