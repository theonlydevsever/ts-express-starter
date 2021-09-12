module.exports = {
    collectCoverageFrom: ["src/**/*.ts", "!src/lib/printEnv.ts", "!src/**/index.ts"],
    coverageDirectory: "coverage",
    globals: {
        "ts-jest": {
            tsconfig: "./tsconfig.test.json",
            diagnostics: false
        }
    },
    preset: "ts-jest",
    roots: ["<rootDir>/src"],
    setupFilesAfterEnv: ["./testSetup.js"],
    testEnvironment: "node",
    testTimeout: 30000,
    transform: {
        "^.+\\.(ts)$": "ts-jest"
    }
};
