/** @type {import('ts-jest').JestConfigWithTsJest} */
const baseDir = '<rootDir>/src/app/doubles'
const baseTestDir = '<rootDir>/src/test/doubles'

module.exports = {
  preset: 'ts-jest',
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        `${baseDir}/**/*.ts`
    ],
    testMatch: [
        `${baseTestDir}/**/*.ts`
    ],
};