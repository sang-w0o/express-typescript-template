import { StatusCodes } from "utils";

export abstract class ApiError extends Error {
  public abstract status: StatusCodes;
  protected abstract readonly code_type: string;
  get name(): string {
    return this.constructor.name;
  }
  protected get error_code(): number {
    return ErrorCode[this.name];
  }
  public get code(): string {
    return `${this.code_type}${this.error_code?.toString().padStart(4, "0")}`;
  }
}

export enum ErrorCode {
  // General
  BadRequestError = 1,
  UnauthorizedError = 2,
  ConflictError = 3,

  // USER
  UserEmailConflictError = 2,
  UserNicknameConflictError = 3,
}
