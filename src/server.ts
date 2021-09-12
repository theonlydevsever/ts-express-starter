require("dotenv").config();
import "module-alias/register";
import { ApplicationState, initializeApplication } from "./application";

const PORT = process?.env?.PORT || 3000;
const app = initializeApplication();

app.on(ApplicationState.READY, () => {
    app.listen(PORT, () => {
        console.info(`Application listening on http://localhost:${PORT}`);
    });
});

app.on(ApplicationState.ERROR, () => {
    console.error("Application has failed to start");

    process.exit(1);
});
