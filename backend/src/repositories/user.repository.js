

import User from "../models/User.js";

class UserRepository {
    async findAll(){
        return await User.find()
    }

    async findById(id){
        return await User.findById(id)
    }

    async findByEmail(email){
        return await User.findOne({
            email
        });
    }

    async create(data){
        return await User.create(data);
    }

    async update(id, data){
        return await User.update(id, data, {
            new:true
        });
    }

    async delete(id){
        return await User.delete(id)
    }
}

export default new UserRepository();