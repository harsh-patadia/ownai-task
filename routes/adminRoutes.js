const express = require("express");
const { listUsers, viewUserDetail } = require("../src/controller/adminController");
const authorization = require("../middleware/authorization");

const adminRouter = express.Router();
adminRouter.get("/users/list", authorization, listUsers);
adminRouter.get("/user/view/:userId", authorization, viewUserDetail);

module.exports = adminRouter;
