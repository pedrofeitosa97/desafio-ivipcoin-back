"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginController = exports.registerUserController = void 0;
const registerUser_service_1 = __importDefault(require("../services/users/registerUser.service"));
const userLogin_service_1 = __importDefault(require("../services/users/userLogin.service"));
const schemas_1 = require("../schemas/schemas");
const schemas_2 = require("../schemas/schemas");
const registerUserController = async (req, res) => {
    try {
        const validatedRegister = await schemas_2.registerSchema.validate(req.body, { abortEarly: false });
        const { name, email, password, photoURL } = validatedRegister;
        const user = await (0, registerUser_service_1.default)({ name, email, password, photoURL });
        const [message, status] = user;
        return res.status(status).json(message);
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: error.errors[0] });
    }
};
exports.registerUserController = registerUserController;
const userLoginController = async (req, res) => {
    try {
        const validatedLogin = await schemas_1.loginSchema.validate(req.body, { abortEarly: false });
        const user = await (0, userLogin_service_1.default)(validatedLogin);
        return res.status(user[1]).json(user[0]);
    }
    catch (error) {
        return res.status(401).json({ message: error.errors[0] });
    }
};
exports.userLoginController = userLoginController;
