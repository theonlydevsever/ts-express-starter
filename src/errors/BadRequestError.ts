import { BaseError } from "./BaseError";
import { DefinedErrorCodes, ErrorCode, ErrorDetails, ErrorStatus } from "errors";

class BadRequestError extends BaseError {
    statusCode: ErrorStatus = ErrorStatus.BadRequest;
    errorCode: ErrorCode = "TODE0001";
    details: ErrorDetails = [];

    constructor(
        public message: string = DefinedErrorCodes.TODE0001,
        public errorDetails: ErrorDetails | string[] = []
    ) {
        super(message);
        this.details = super.serializeErrors(errorDetails);

        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}

export default BadRequestError;
export { BadRequestError };
