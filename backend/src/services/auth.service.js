

class AuthService {
    register(userData){
        return {
            message: "Registration service pending",
            data: userData
        }; 
    }

    async login(credentials){
        return{
            message: "Login service pending",
            data: credentials
        };
    }
}

export default new AuthService();