"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controllers_1 = require("../../controllers/users.controllers");
const userRoutes = (0, express_1.Router)();
userRoutes.post('/users', users_controllers_1.registerUserController);
userRoutes.post('/login', users_controllers_1.userLoginController);
exports.default = userRoutes;
