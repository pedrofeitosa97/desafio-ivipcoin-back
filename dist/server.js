"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseApp = exports.firebaseConfig = void 0;
const app_1 = __importDefault(require("./app"));
const app_2 = require("firebase/app");
const admin = __importStar(require("firebase-admin"));
admin.initializeApp();
exports.firebaseConfig = {
    apiKey: "AIzaSyARpLDnCMPNCe1ASQXDf4H2keWodSUh7dA",
    authDomain: "desafio-ivipcoin.firebaseapp.com",
    projectId: "desafio-ivipcoin",
    storageBucket: "desafio-ivipcoin.appspot.com",
    messagingSenderId: "909245436472",
    appId: "1:909245436472:web:71b4205031e63a3c2e8ccd",
    measurementId: "G-941FE86V84"
};
exports.firebaseApp = (0, app_2.initializeApp)(exports.firebaseConfig);
app_1.default.listen(3000, () => {
    console.log('Servidor executando na porta 3000');
});
