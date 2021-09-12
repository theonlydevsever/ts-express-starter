import { BaseError } from "./BaseError";
import { ErrorCode, ErrorDetails, ErrorStatus } from "errors";

class ServerError extends BaseError {
    statusCode: ErrorStatus = ErrorStatus.ServerError;
    errorCode: ErrorCode = "TODE0007";
    details: ErrorDetails = [];

    constructor(
        public message: string = "Server Error",
        public errorDetails: ErrorDetails | string[] = []
    ) {
        super(message);
        this.details = super.serializeErrors(errorDetails);

        Object.setPrototypeOf(this, ServerError.prototype);
    }
}

export default ServerError;
export { ServerError };
