export declare class AppError extends Error {
    statusCode?: number;
    constructor(message: string, statusCode?: number);
}
export declare function handleError(error: unknown): void;
//# sourceMappingURL=errorHandler.d.ts.map