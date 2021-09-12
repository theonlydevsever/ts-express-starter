import { BaseError } from "./BaseError";
import { ErrorCode, ErrorDetails, ErrorStatus } from "errors";

class AuthenticationError extends BaseError {
    statusCode: ErrorStatus = ErrorStatus.Unauthorized;
    errorCode: ErrorCode = "TODE0002";
    details: ErrorDetails = [];

    constructor(
        public message: string = "Authentication Error",
        public errorDetails: ErrorDetails | string[] = []
    ) {
        super(message);
        this.details = super.serializeErrors(errorDetails);

        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }
}

export default AuthenticationError;
export { AuthenticationError };
