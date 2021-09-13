module.exports = {
    collectCoverageFrom: ["src/**/*.ts", "!src/lib/printEnv.ts", "!src/**/index.ts"],
    coverageDirectory: "coverage",
    globals: {
        "ts-jest": {
            tsconfig: "./tsconfig.test.json",
            diagnostics: false
        }
    },
    moduleDirectories: ["node_modules", "src"],
    moduleNameMapper: {
        "^errors/(.*)$": "<rootDir>/src/errors/$1",
        "^lib/(.*)$": "<rootDir>/src/lib/$1",
        "^root/(.*)$": "<rootDir>/src/$1",
        "^routes/(.*)$": "<rootDir>/src/routes/$1"
    },
    preset: "ts-jest",
    roots: ["<rootDir>/src"],
    setupFiles: ["./jest/setEnvVars.js"],
    setupFilesAfterEnv: ["./jest/testSetup.js"],
    testEnvironment: "node",
    testTimeout: 30000,
    transform: {
        "^.+\\.(ts)$": "ts-jest"
    }
};
