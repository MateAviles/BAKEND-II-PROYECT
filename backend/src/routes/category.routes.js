

import { Router } from "express";

import {getCategories, createCategory, getCategoryById, deleteCategory} from "../controllers/category.controller.js";

import { auth } from "../middlewares/auth.js";

import { authorize } from "../middlewares/authorize.js";

const router = Router();

router.get("/", getCategories);

router.post("/", auth, authorize("admin"), createCategory);

router.get("/:id", auth, authorize("admin"),  getCategoryById);

router.delete("/:id", auth, authorize("admin"),  deleteCategory);

export default router;

