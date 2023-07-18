export default class AppError extends Error {
    statusCode: number;
    message: string;
    status: string;
    isOperational: boolean;
    constructor(statusCode: number, message: string);
}
