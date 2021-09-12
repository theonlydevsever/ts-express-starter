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
