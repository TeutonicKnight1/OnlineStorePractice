const database = require("./DatabaseService");

const jwt = require("jsonwebtoken");

const config = require("../config");

class UsersService {
  async getByUserLogin(userlogin) {
    return new Promise((resolve, reject) => {
      database.connection.query(
        `
                SELECT * FROM user WHERE user_login = (?)
            `,
        [userlogin],
        (err, result) => {
          if (err) {
            reject(err);
          }

          resolve(result.at(0));
        }
      );
    });
  }

  async login(userlogin, password) {
    const user = await this.getByUserLogin(userlogin);

    if (!user) {
      return {
        error: "User not found",
      };
    }

    if (password != user.user_password) {
      return {
        error: "Invalid password",
      };
    }

    const token = jwt.sign(
      {
        user: {
          login: user.user_login,
          id: user.user_id,
        },
      },
      config.jwtSecret
    );

    return {
      token,
    };
  }

  getUserByToken(token) {
    try {
      const payload = jwt.verify(token, config.jwtSecret);

      if (!payload) {
        return undefined;
      }

      return payload;
    } catch (e) {
      console.log(e);

      return undefined;
    }
  }

  async register(userlogin, password) {
    return new Promise((resolve, reject) => {
      database.connection.query(
        `
                INSERT INTO user (user_login, user_password) values (?, ?)
            `,
        [userlogin, password],
        (err, result) => {
          if (err) {
            reject(err);
          }

          resolve(result);
        }
      );
    });
  }
}

module.exports = new UsersService();
