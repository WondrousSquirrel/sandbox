module.exports = {
    roots: ["<rootDir>/test"],
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
  
    // Runs special logic, such as cleaning up components
    // when using React Testing Library and adds special
    // extended assertions to Jest
    /*
    setupFilesAfterEnv: [
      "@testing-library/react/cleanup-after-each",
      "@testing-library/jest-dom/extend-expect"
    ],
  */
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
      '^.+\\.(css|scss)$': '<rootDir>/test/config/CSSStub.js'
  },
  };