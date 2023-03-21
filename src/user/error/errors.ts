import { ApiError } from "common/error";
import { StatusCodes } from "utils";

abstract class UserError extends ApiError {
  readonly code_type = "USER";
}

export class UserNicknameConflictError extends UserError {
  constructor(nickname?: string, status?: number) {
    super();
    this.message = nickname
      ? `해당 닉네임은 이미 사용중입니다.(nickname: ${nickname})`
      : "해당 닉네임은 이미 사용중입니다.";
    this.status = status || StatusCodes.CONFLICT_409;
  }
  message = this.message;
  status = StatusCodes.CONFLICT_409;
}

export class UserEmailConflictError extends UserError {
  constructor(email?: string, status?: number) {
    super();
    this.message = email
      ? `해당 이메일은 이미 사용중입니다.(nickname: ${email})`
      : "해당 이메일은 이미 사용중입니다.";
    this.status = status || StatusCodes.CONFLICT_409;
  }
  message = this.message;
  status = StatusCodes.CONFLICT_409;
}
