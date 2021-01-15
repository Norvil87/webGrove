module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    //'.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
