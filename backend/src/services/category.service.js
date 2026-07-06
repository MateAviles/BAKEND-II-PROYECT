

import categoryRepository from "../repositories/category.repository.js";

class CategoryService{

    async getCategories(){
        return await categoryRepository.findAll();
    }

    async getCategoryById(id){
        return await categoryRepository.findById(id);
    }

    async createCategory(data){
        return await categoryRepository.create(data);
    }

    async deleteCategory(id){
        return await categoryRepository.delete(id);
    }
}

export default new CategoryService();