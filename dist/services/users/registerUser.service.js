"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase/auth");
const registerUserService = async (userData) => {
    const auth = (0, auth_1.getAuth)();
    try {
        const userCredential = await (0, auth_1.createUserWithEmailAndPassword)(auth, userData.email, userData.password);
        const user = userCredential.user;
        await (0, auth_1.updateProfile)(user, {
            displayName: userData.name,
            photoURL: userData.photoURL
        });
        return [user, 200];
    }
    catch (error) {
        return [{ message: error.code }, 401];
    }
};
exports.default = registerUserService;
