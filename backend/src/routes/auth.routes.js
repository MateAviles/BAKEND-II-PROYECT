

import {Router} from "express";

import {register, login} from "../controllers/auth.controller.js";

import { auth } from "../middlewares/auth.js";

import { authorize } from "../middlewares/authorize.js";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/test-post", auth, (req, res) => {
    res.status(201).json({
        message: "Token válido detectado",
        dataEnviada: req.body,
        usuarioQueLoEnvia: req.user
    });
});

router.put("/test-put", auth, authorize("admin"), (req, res) => {
    res.json({
        message: "Datos actualizados por el Admin",
        dataActualizada: req.body,
        user: req.user
    });
});

router.delete("/test-delete", auth, authorize("admin"), (req, res) => {
    res.json({
        message: "Recurso eliminado por el Admin",
        user: req.user
    });
});

export default router;