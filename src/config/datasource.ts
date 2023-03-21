import { DataSource } from "typeorm";
import { User } from "user/domain";
import {
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} from "config/settings";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DATABASE_HOST,
  port: parseInt(DATABASE_PORT),
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  entities: [User],
});
