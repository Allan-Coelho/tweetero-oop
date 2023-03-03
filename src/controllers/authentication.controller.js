class AuthController {
  constructor() {
    this.users = [];
    this.signin = this.signin.bind(this);
    this.getAuthenticatedUsers = this.getAuthenticatedUsers.bind(this);
  }

  signin(request, response) {
    const { username, avatar } = request.body;
    const isInvalidRequest = !username || !avatar;

    if (isInvalidRequest) {
      response.status(400).send("Please, fill all fields");
      return;
    }

    this.users.push({ username, avatar });

    response.sendStatus(200);
  }

  getAuthenticatedUsers(username) {
    return this.users.find((user) => user.username === username);
  }
}

export default new AuthController();
