import express, { Express } from "express";
import compression from "compression";

import { baseRouter } from "routes";

enum ApplicationState {
    ERROR = "error",
    READY = "ready"
}

const initializeApplication: () => Express = () => {
    const app = express();

    try {
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(compression());

        app.use("/", baseRouter);

        setTimeout(() => {
            app.emit(ApplicationState.READY);
        }, 1000);
    } catch (error) {
        app.emit(ApplicationState.ERROR);
    }

    return app;
};

export default initializeApplication;
export { ApplicationState, initializeApplication };
