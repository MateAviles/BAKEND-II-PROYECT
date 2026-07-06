

import { Router } from "express";

const router = Router();

router.get("/", (req,res) => {
    res.json({
        status: "oka",
        message: "server active"
    });
});

export default router;