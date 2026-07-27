

import userService from "./user.service.js";
import {hashPassword, comparePassword} from "../utils/hashPassword.js";
import {generateToken} from "../utils/jwt.js";

class AuthService {
    async register(userData) {
        const existingUser = await userService.getUserByEmail(userData.email);

        if (existingUser) {
            throw new Error("User already exist");
        }

        userData.password = await hashPassword(userData.password);

        return await userService.createUser(userData);
    }

    async login(credentials) {
        const user = await userService.getUserByEmail(credentials.email);

        if (!user) {
            throw new Error("Invalid credentials");
        }

        const validPassword = await comparePassword(credentials.password, user.password);

        if (!validPassword) {
            throw new Error("Invalid credentials");
        }

        const token = generateToken({
            id: user._id,
            email: user.email,
            role: user.role
        });

        return {
            token,
            user: {
                id: user._id,
                first_name: user.first_name, 
                last_name: user.last_name,   
                email: user.email,
                role: user.role
            }
        };
    }
}

export default new AuthService();
