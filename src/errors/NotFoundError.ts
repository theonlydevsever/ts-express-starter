import { BaseError } from "./BaseError";
import { DefinedErrorCodes, ErrorCode, ErrorDetails, ErrorStatus } from "errors";

class NotFoundError extends BaseError {
    statusCode: ErrorStatus = ErrorStatus.NotFound;
    errorCode: ErrorCode = "TODE0003";
    details: ErrorDetails = [];

    constructor(
        public message: string = DefinedErrorCodes.TODE0003,
        public errorDetails: ErrorDetails | string[] = []
    ) {
        super(message);
        this.details = super.serializeErrors(errorDetails);

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}

export default NotFoundError;
export { NotFoundError };
