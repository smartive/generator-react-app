module.exports = {
  rootDir: '../../',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.{ts,tsx}',
    '!<rootDir>/src/**/*.test.{ts,tsx}',
    '!<rootDir>/src/**/*.stories.tsx',
  ],
  collectCoverage: true,
  setupFiles: ['<rootDir>/config/jest/setup.js'],
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  testPathIgnorePatterns: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
