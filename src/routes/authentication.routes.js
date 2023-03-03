import { Router } from "express";
import authenticationControllers from "../controllers/authentication.controller.js";

const authenticationRouter = Router();

authenticationRouter.post("/sign-up", authenticationControllers.signin);

export default authenticationRouter;
