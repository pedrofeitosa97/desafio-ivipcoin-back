"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const ensureAuthMiddleware = async (req, res, next) => {
    let token = req.headers.authorization;
    if (!token) {
        return "TOKEN INVÁLIDO!";
    }
    token = token.split(' ')[1];
    const decodedtoken = jsonwebtoken_1.default.decode(token);
    req.user = {
        id: decodedtoken?.sub,
        name: decodedtoken?.name,
        picture: decodedtoken?.picture
    };
    return next();
};
exports.default = ensureAuthMiddleware;
