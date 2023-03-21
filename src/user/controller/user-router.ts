import { Request, Response, NextFunction, Router } from "express";
import container from "config/inversify-config";
import { UserService } from "user/service";
import { TYPES } from "config";
import { StatusCodes } from "utils";
import { UserCreateRequest } from "user/controller/request";

const router = Router();

const userService = container.get<UserService>(TYPES.UserService);

const userSignupRoute = "/signup";
router
  .route(userSignupRoute)
  .post(async (request: Request, response: Response, next: NextFunction) => {
    try {
      const userCreateRequest = request.body as UserCreateRequest;
      const result = await userService.signup(userCreateRequest);
      return response.status(StatusCodes.CREATED_201).json(result);
    } catch (e) {
      next(e);
    }
  });

export { router as userRouter };
