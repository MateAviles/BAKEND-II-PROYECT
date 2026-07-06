

import userRepository from "../repositories/user.repository.js";

class UserService{
    async getUsers(){
        return await userRepository.findAll();
    }

    async getUserById(id){
        return await userRepository.findById(id);
    }

    async getUserByEmail(email){
        return await userRepository.findByEmail(email);
    }

    async createUser(data){
        return await userRepository.create(data);
    }

    async updateUser(id, data){
        return await userRepository.update(id, data);
    }

    async deleteUser(id){
        return await userRepository.delete(id);
    }
}

export default new UserService();