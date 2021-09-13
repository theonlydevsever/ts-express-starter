import { NextFunction, Request, Response } from "express";

import { DefinedErrorCodes, NotFoundError } from "errors";

/**
 * A catch-all route handler that gets hit when the incoming route on the request has not been registered
 * with any of the express routers
 *
 * @param req The incoming request object
 * @param res The express response object
 * @param next The `next` function used to move on to the next middleware
 * @returns The `next` function which will pass the error to the global error handler
 */
const catchAllHandler = (req: Request, res: Response, next: NextFunction) => {
    const params = (Object.values(req.params) || []).map((param) => param);

    return next(
        new NotFoundError(
            DefinedErrorCodes.TODE0003,
            params.length > 0
                ? [`${params.join("")} does not exist`]
                : ["The requested resource could not be found or does not exist"]
        )
    );
};

export default catchAllHandler;
export { catchAllHandler };
