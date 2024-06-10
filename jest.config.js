/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./test/setup.ts'],
  globalSetup: './test/global-setup.ts',
  globalTeardown: './test/global-teardown.ts',
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.e2e-spec.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  moduleDirectories: ['<rootDir>', 'node_modules'],
  roots: ['<rootDir>'],
  moduleNameMapper: { '^src/(.*)$': '<rootDir>/src/$1' },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: './coverage',
};
