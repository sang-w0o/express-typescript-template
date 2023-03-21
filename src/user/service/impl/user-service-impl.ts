import { AppDataSource } from "config/datasource";
import { injectable } from "inversify";
import { UserEmailConflictError, UserNicknameConflictError } from "user/error";
import { UserCreateRequest } from "user/controller/request";
import { UserCreateResponse } from "user/controller/response";
import { UserRepository } from "user/domain/user-repository";
import { EntityManager } from "typeorm";
import { User } from "user/domain";
import { UserService } from "user/service";

@injectable()
export class UserServiceImpl implements UserService {
  signup = (request: UserCreateRequest): Promise<UserCreateResponse> => {
    return AppDataSource.transaction(async (entityManager: EntityManager) => {
      const user = await UserRepository.findOne({
        where: [{ email: request.email }, { nickname: request.nickname }],
      });
      if (user) {
        if (user.email === request.email) {
          throw new UserEmailConflictError(request.email);
        }
        if (user.nickname === request.nickname) {
          throw new UserNicknameConflictError(request.nickname);
        }
      }
      const newUser = new User();
      newUser.email = request.email;
      newUser.nickname = request.nickname;
      const result = await UserRepository.save(newUser);
      return {
        id: result.id,
        email: result.email,
        nickname: result.nickname,
      };
    });
  };
}
