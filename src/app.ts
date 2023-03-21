import "reflect-metadata";
import express from "express";
import { userRouter } from "user/controller";
import { ErrorHandler } from "config";
import { AppDataSource } from "config/datasource";
import { logger } from "utils";

const app = express();
app.use(express.json());
app.use("/user", userRouter);
app.use(ErrorHandler);

AppDataSource.initialize()
  .then(() => {
    logger.info("Data Source has been initialized!");
  })
  .catch((err: any) => {
    logger.error("Error during Data Source initialization");
    logger.error(err);
  });

export default app;
