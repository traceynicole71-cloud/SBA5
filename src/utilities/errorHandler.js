"use strict";
//function to handle errors
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = void 0;
exports.handleError = handleError;
class AppError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.name = "AppError";
        this.statusCode = statusCode;
    }
}
exports.AppError = AppError;
function handleError(error) {
    if (error instanceof AppError) {
        console.error(`AppError: ${error.message}, Status: ${error.statusCode}`);
    }
    else if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
    }
    else {
        console.error("Unknown Error:", error);
    }
}
//# sourceMappingURL=errorHandler.js.map