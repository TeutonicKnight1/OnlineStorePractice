const dotenv = require("dotenv")

dotenv.config()

const config = {

    port: parseInt(process.env.HTTP_PORT || "8080", 10),
    jwtSecret: process.env.JWT_SECRET

}

module.exports = config;