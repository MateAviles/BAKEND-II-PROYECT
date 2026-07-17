

import Category from "../models/Category.js";

class CategoryRepository {
    async findAll(){
        return await Category.find();
    }

    async findById(id){
        return await Category.findById(id);
    }

    async create(data) {
        return await Category.create(data);
    }

    async delete(id){
        return await Category.findByIdAndDelete(id);
    }
};

export default new CategoryRepository();