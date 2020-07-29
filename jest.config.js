module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: './coverage/',
  coverageReporters: ['text', 'html'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  preset: 'jest-expo-enzyme',
};
