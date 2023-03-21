import { AppDataSource } from "config/datasource";
import { User } from "user/domain";

export const UserRepository = AppDataSource.getRepository(User);
