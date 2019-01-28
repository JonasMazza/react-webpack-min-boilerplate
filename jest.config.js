module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpef|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "<rootDir>/tests/__mocks__/fileMock.js",
    "\\.(css)$": "<rootDir>/tests/__mocks__/styleMock.js"
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/src/**/*.{js,jsx}", "!**/src/**/index.{js,jsx}", "!**/node_modules/**", "!**/public/**"],
  coverageDirectory: "<rootDir>/tests/coverage",
  coverageReporters: ["lcov", "text"]
}