const { DataSource } = require("typeorm");
const User = require("../src/models/User");
const City = require("../src/models/City");
const Country = require("../src/models/Country");
require("dotenv").config();

const Database = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [User, City, Country],
    // synchronize: true,
    logging: true,
    entities: ["src/models/**/*.js"],
    migrations: ["src/migration/**/*.js"],
    // subscribers: ["src/subscriber/**/*.js"], 
})

module.exports = Database
