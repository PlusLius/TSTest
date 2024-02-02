/** @type {import('ts-jest').JestConfigWithTsJest} */
const baseDir = '<rootDir>/src/app/pass_checker'
const baseTestDir = '<rootDir>/src/test/pass_checker'

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