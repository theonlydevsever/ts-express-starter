/**
 * This file will register the typescript module aliases for production
 *
 * @see - https://github.com/ilearnio/module-alias/issues/74#issuecomment-535379630
 */
const tsConfigPaths = require("tsconfig-paths");
const tsConfig = require("./tsconfig.json");

const baseUrl = "./dist";

tsConfigPaths.register({
    baseUrl,
    paths: tsConfig.compilerOptions.paths
});
