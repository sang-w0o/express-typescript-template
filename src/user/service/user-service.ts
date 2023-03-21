import { UserCreateRequest } from "user/controller/request";
import { UserCreateResponse } from "user/controller/response";

export interface UserService {
  signup(request: UserCreateRequest): Promise<UserCreateResponse>;
}
