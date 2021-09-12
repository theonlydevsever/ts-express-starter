type ErrorCode = keyof typeof DefinedErrorCodes;

type ErrorDetails = { message: string; field?: string }[];

enum ErrorStatus {
    "BadRequest" = 400,
    "Unauthorized" = 401,
    "NotFound" = 404,
    "NotAllowed" = 405,
    "Conflict" = 409,
    "ExpectationFailed" = 417,
    "ServerError" = 500
}

const DefinedErrorCodes = {
    TODE0000: "Undefined Error",
    TODE0001: "Bad Request Error",
    TODE0002: "Authentication Error",
    TODE0003: "Not Found Error",
    TODE0004: "Not Allowed Error",
    TODE0005: "Conflict Error",
    TODE0006: "Expectation Failed Error",
    TODE0007: "Internal Server Error"
};

export default DefinedErrorCodes;
export { DefinedErrorCodes, ErrorCode, ErrorDetails, ErrorStatus };
