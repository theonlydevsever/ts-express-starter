import { BaseError } from "./BaseError";
import { DefinedErrorCodes, ErrorCode, ErrorDetails, ErrorStatus } from "errors";

class ConflictError extends BaseError {
    statusCode: ErrorStatus = ErrorStatus.Conflict;
    errorCode: ErrorCode = "TODE0005";
    details: ErrorDetails = [];

    constructor(
        public message: string = DefinedErrorCodes.TODE0005,
        public errorDetails: ErrorDetails | string[] = []
    ) {
        super(message);
        this.details = super.serializeErrors(errorDetails);

        Object.setPrototypeOf(this, ConflictError.prototype);
    }
}

export default ConflictError;
export { ConflictError };
