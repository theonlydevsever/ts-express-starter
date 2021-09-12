import { BaseError } from "./BaseError";
import { ErrorCode, ErrorDetails, ErrorStatus } from "errors";

class ExpectationFailedError extends BaseError {
    statusCode: ErrorStatus = ErrorStatus.ExpectationFailed;
    errorCode: ErrorCode = "TODE0006";
    details: ErrorDetails = [];

    constructor(
        public message: string = "Expectation Failed Error",
        public errorDetails: ErrorDetails | string[] = []
    ) {
        super(message);
        this.details = super.serializeErrors(errorDetails);

        Object.setPrototypeOf(this, ExpectationFailedError.prototype);
    }
}

export default ExpectationFailedError;
export { ExpectationFailedError };
