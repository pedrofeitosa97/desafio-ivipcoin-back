import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    email: yup.string().email().required('Um email é necessário'),
    password: yup.string().required('A senha é obrigatória'),
});

export const registerSchema = yup.object().shape({
    name: yup.string().required('Nome de usuário é obrigatório.'),
    email: yup.string().email('Email inválido').required('Informe um email válido.'),
    password: yup.string().min(6).required('Uma senha com 6 digitos é obrigatória.'),
    photoURL: yup.string().url().required('Por favor, informe uma URL válida.'),
});

export const createTaskSchema = yup.object().shape({
    title: yup.string().required('Um título é obrigatório.'),
    description: yup.string().required('Uma descrição é obrigatória')
});