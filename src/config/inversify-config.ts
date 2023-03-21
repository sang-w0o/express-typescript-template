import { Container } from "inversify";
import { UserService, UserServiceImpl } from "user/service";
import { TYPES } from "config";

const container = new Container();

container.bind<UserService>(TYPES.UserService).to(UserServiceImpl);

export default container;
