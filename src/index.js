import chalk from "chalk";
import cors from "cors";
import express, { json } from "express";
import authenticationRouter from "./routes/authentication.routes.js";
import tweetRouter from "./routes/tweet.routes.js";

const app = express();

app.use(cors());
app.use(json());
app.use(authenticationRouter);
app.use(tweetRouter);

app.listen(5001, () => {
  console.log(chalk.bold.blue("Server is running on port 5001"));
});
