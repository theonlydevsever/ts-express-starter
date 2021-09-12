require("dotenv").config();
import "module-alias/register";

import { initializeApplication } from "./application";
import { printEnv } from "lib";

printEnv();

const PORT = process?.env?.PORT || 3000;
const app = initializeApplication();

app.listen(PORT, () => {
    console.info(`Application listening on http://localhost:${PORT}`);
});
