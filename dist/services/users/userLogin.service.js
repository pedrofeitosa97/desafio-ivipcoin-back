"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase/auth");
const userLoginService = async (data) => {
    const auth = (0, auth_1.getAuth)();
    try {
        const userCredential = await (0, auth_1.signInWithEmailAndPassword)(auth, data.email, data.password);
        const user = userCredential.user;
        return [user, 200];
    }
    catch (error) {
        return [{ message: 'Credenciais inválidas' }, 401];
    }
};
exports.default = userLoginService;
