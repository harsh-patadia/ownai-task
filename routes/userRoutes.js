const express = require("express");
const { register, login, viewUserDetail } = require("../src/controller/userController");
const { validateUserRegistration, validateUserLogin } = require("../middleware/validation");
const authorization = require("../middleware/authorization");

const userRouter = express.Router();

userRouter.post("/register", validateUserRegistration, register);
userRouter.post("/login", validateUserLogin, login);
userRouter.get("/:id", authorization, viewUserDetail);

module.exports = userRouter;
