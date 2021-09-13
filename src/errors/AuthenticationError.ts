import { BaseError } from "./BaseError";
import { DefinedErrorCodes, ErrorCode, ErrorDetails, ErrorStatus } from "errors";

class AuthenticationError extends BaseError {
    statusCode: ErrorStatus = ErrorStatus.Unauthorized;
    errorCode: ErrorCode = "TODE0002";
    details: ErrorDetails = [];

    constructor(
        public message: string = DefinedErrorCodes.TODE0002,
        public errorDetails: ErrorDetails | string[] = []
    ) {
        super(message);
        this.details = super.serializeErrors(errorDetails);

        Object.setPrototypeOf(this, AuthenticationError.prototype);
    }
}

export default AuthenticationError;
export { AuthenticationError };
