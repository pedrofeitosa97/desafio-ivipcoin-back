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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskSchema = exports.createTaskSchema = exports.registerSchema = exports.loginSchema = void 0;
const yup = __importStar(require("yup"));
exports.loginSchema = yup.object().shape({
    email: yup.string().email().required('Um email é necessário'),
    password: yup.string().required('A senha é obrigatória'),
});
exports.registerSchema = yup.object().shape({
    name: yup.string().required('Nome de usuário é obrigatório.'),
    email: yup.string().email('Email inválido').required('Informe um email válido.'),
    password: yup.string().min(6).required('Uma senha com 6 digitos é obrigatória.'),
    photoURL: yup.string().url().required('Por favor, informe uma URL válida.'),
});
exports.createTaskSchema = yup.object().shape({
    title: yup.string().required('Um título é obrigatório.'),
    description: yup.string().required('Uma descrição é obrigatória')
});
exports.updateTaskSchema = yup.object().shape({
    title: yup.string().required('Um título é obrigatório.'),
    description: yup.string().required('Uma descrição é obrigatória')
});
