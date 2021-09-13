import { BaseError } from "./BaseError";
import { DefinedErrorCodes, ErrorCode, ErrorDetails, ErrorStatus } from "errors";

class NotAllowedError extends BaseError {
    statusCode: ErrorStatus = ErrorStatus.NotAllowed;
    errorCode: ErrorCode = "TODE0004";
    details: ErrorDetails = [];

    constructor(
        public message: string = DefinedErrorCodes.TODE0004,
        public errorDetails: ErrorDetails | string[] = []
    ) {
        super(message);
        this.details = super.serializeErrors(errorDetails);

        Object.setPrototypeOf(this, NotAllowedError.prototype);
    }
}

export default NotAllowedError;
export { NotAllowedError };
