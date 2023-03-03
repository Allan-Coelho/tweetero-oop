import { Router } from "express";
import tweetController from "../controllers/tweet.controller.js";

const tweetRouter = Router();

tweetRouter.get("/tweets", tweetController.getAll);
tweetRouter.get("/tweets/:username", tweetController.getByUsername);
tweetRouter.post("/tweets", tweetController.create);

export default tweetRouter;
