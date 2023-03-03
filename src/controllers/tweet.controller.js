import authenticationControllers from "./authentication.controller.js";

class TweetController {
  constructor() {
    this.tweets = [];
    this.getAll = this.getAll.bind(this);
    this.getByUsername = this.getByUsername.bind(this);
    this.create = this.create.bind(this);
  }

  create(request, response) {
    const { tweet, username } = request.body;
    const isInvalidRequest = !username || !tweet;

    if (isInvalidRequest) {
      return response.status(400).send("please, fill all fields");
    }

    const { avatar } =
      authenticationControllers.getAuthenticatedUsers(username);

    this.tweets.push({ avatar, username, tweet });

    response.sendStatus(201);
  }

  getAll(request, response) {
    const { page } = request.query;
    const isInvalidRequest = page && Number(page) < 1;
    const PAGES_LIMIT = 10;

    if (isInvalidRequest) {
      response.status(400).send("Please, inform a valid page");
      return;
    }

    if (this.tweets.length <= PAGES_LIMIT) {
      return response.send(this.invertTweets());
    }

    response
      .status(200)
      .send(
        [...this.tweets]
          .reverse()
          .slice((page - 1) * PAGES_LIMIT, page * PAGES_LIMIT)
      );
  }

  getByUsername(request, response) {
    const { username } = request.params;
    const tweetsDoUsuario = this.tweets.filter((t) => t.username === username);

    response.status(200).send(tweetsDoUsuario);
  }

  invertTweets() {
    return [...this.tweets].reverse();
  }
}

export default new TweetController();
