// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  coverageDirectory: "coverage",
  testPathIgnorePatterns: ["<rootDir>/tests/__fixtures__/"],
  coveragePathIgnorePatterns: ["<rootDir>/tests/__fixtures__/"],
  reporters: [
    "default",
    [
      "./node_modules/jest-html-reporter",
      {
        pageTitle: "Test Report"
      }
    ]
  ]
};
