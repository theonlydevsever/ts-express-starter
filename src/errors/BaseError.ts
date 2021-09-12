import { isValueOfType } from "@theonlydevsever/utilities";

import { ErrorCode, ErrorDetails, ErrorStatus } from "errors";

abstract class BaseError extends Error {
    abstract statusCode: ErrorStatus;
    abstract errorCode: ErrorCode;
    abstract details: ErrorDetails;

    constructor(message: string) {
        super(message);

        Object.setPrototypeOf(this, BaseError.prototype);
    }

    /**
     * Sets an error code on the current error instance
     *
     * @param errorCode The error code to set on the current error
     * @returns The current error
     */
    setErrorCode(errorCode: ErrorCode): BaseError {
        this.errorCode = errorCode;

        return this;
    }

    /**
     * Serialized and formats error details regarding the current error
     *
     * @param details Details regarding the current error
     * @returns Formatted error details
     */
    serializeErrors(details: ErrorDetails | string[] = []): ErrorDetails {
        return (
            details?.map((message) => {
                if (isValueOfType(message, "string")) {
                    return { message };
                } else {
                    return message;
                }
            }) || [{ message: this.message }]
        );
    }
}

export default BaseError;
export { BaseError };
