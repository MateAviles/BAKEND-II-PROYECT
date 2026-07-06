

import { Router } from "express";

import {getCategories, createCategory, getCategoryById, deleteCategory} from "../controllers/category.controller.js";

const router = Router();

router.get("/", getCategories);

router.post("/", createCategory);

router.get("/:id", getCategoryById);

router.delete("/:id", deleteCategory)

export default router;

