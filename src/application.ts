import express, { NextFunction, Request, Response } from "express";
import compression from "compression";

import { ErrorDetails, NotFoundError } from "errors";
import { BaseError } from "errors/BaseError";
import { baseRouter } from "routes";

enum ApplicationState {
    ERROR = "error",
    READY = "ready"
}

const initializeApplication: () => void = () => {
    const PORT = process?.env?.PORT || 3000;
    const app = express();

    app.on(ApplicationState.READY, () => {
        app.listen(PORT, () => {
            console.info(`Application listening on http://localhost:${PORT}`);
        });
    });

    app.on(ApplicationState.ERROR, () => {
        console.error("Application has failed to start");

        process.exit(1);
    });

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

        app.emit(ApplicationState.READY);
    } catch (error) {
        console.error(error);

        app.emit(ApplicationState.ERROR);
    }
};

export default initializeApplication;
export { ApplicationState, initializeApplication };
