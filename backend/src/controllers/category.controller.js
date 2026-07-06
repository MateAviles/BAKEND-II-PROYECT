

import categoryService from "../services/category.service.js";

export const getCategories = async(req, res) => {
    try{
        const categories = await categoryService.getCategories();
        res.json(categories);

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

export const createCategory = async (req, res) => {
    try{
        const category = await categoryService.createCategory(req.body);

        res.status(201).json(category);

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
};

export const getCategoryById = async (req, res) => {
    try{
        const category = await categoryService.getCategoryById(req.params.id);
        res.json(category);

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}


export const deleteCategory = async (req, res) => {
    try{
        const category = await categoryService.deleteCategory(req.params.id);
        res.json(category);

    }catch(error){
        res.status(500).json({
            messagte:error.message
        });
    }
}