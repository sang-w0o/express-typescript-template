import { Request, Response, NextFunction } from "express";
import { ApiError } from "common/error/api-error";
import { logger, StatusCodes } from "utils";

interface LogObject {
  message: string;
  path: string;
  stack?: string;
}

export const ErrorHandler = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ApiError) {
    res.status(error.status).json({
      code: error.code,
      message: error.message,
    });
  } else {
    const logObject: LogObject = {
      message: error.message,
      stack: error.stack,
      path: req.path,
    };
    logger.error(logObject);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR_500)
      .json({ message: logObject.message, path: logObject.path });
  }
};
