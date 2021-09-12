import express, { Express, NextFunction, Request, Response } from "express";
import compression from "compression";

import { ErrorDetails, NotFoundError } from "errors";
import { BaseError } from "errors/BaseError";
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

        /**
         * Catch-all route handler
         */
        app.use("*", (req: Request, res: Response, next: NextFunction) => {
            const params = (Object.values(req.params) || []).map((param) => param);

            next(
                new NotFoundError(
                    "Not Found",
                    params.length > 0
                        ? [`${params.join("")} does not exist`]
                        : ["The requested resource could not be found or does not exist"]
                )
            );
        });

        /**
         * Global error handler
         */
        // Disable linting for `next` as it is unsed, but required as an argument
        // eslint-disable-next-line
        app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
            const message = error.message || "Server Error";
            let status = 500;
            let details: ErrorDetails = [];

            if (error instanceof BaseError) {
                status = error?.statusCode || 500;
                details = error?.details || [];
            }

            return res.status(status).json({
                status,
                message,
                details
            });
        });

        return app;
    } catch (error) {
        console.error(error);
        console.error("Application has failed to start");

        process.exit(1);
    }
};

export default initializeApplication;
export { initializeApplication };
