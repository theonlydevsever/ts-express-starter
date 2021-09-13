import express, { Express, NextFunction, Request, Response } from "express";
import compression from "compression";

import { catchAllHandler, globalErrorHandler } from "middlewares";
import { baseRouter } from "routes";

/**
 * Initializes and configures an express application
 *
 * @returns An express application
 */
const initializeApplication: () => Express = () => {
    const app = express();

    try {
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(compression());

        app.use("/", baseRouter);
        app.use("*", catchAllHandler);

        // Disable linting for `next` as it is unused, but required as an argument
        // eslint-disable-next-line
        app.use((error: Error, req: Request, res: Response, next: NextFunction) =>
            globalErrorHandler(error, res)
        );

        return app;
    } catch (error) {
        console.error(error);
        console.error("Application has failed to start");

        process.exit(1);
    }
};

export default initializeApplication;
export { initializeApplication };
