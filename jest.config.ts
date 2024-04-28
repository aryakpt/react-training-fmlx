import type { Config } from "jest";

const config: Config = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
  },

  moduleNameMapper: {
    "src/(.*)": "<rootDir>/src/$1",
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  modulePaths: ["node_modules", "<rootDir>/src"],
};

export default config;
