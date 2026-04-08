//function to handle errors

export class AppError extends Error {
    statusCode?: number;

    constructor(message: string, statusCode?: number) {
        super(message);
        this.name = "AppError";
        this.statusCode = statusCode;
    }
}

export function handleError(error: unknown): void {
    if (error instanceof AppError) {
        console.error(`AppError: ${error.message}, Status: ${error.statusCode}`)
    } else if (error instanceof Error) {
        console.error(`Error: ${error.message}`);
    } else {
        console.error("Unknown Error:", error);
    }
}