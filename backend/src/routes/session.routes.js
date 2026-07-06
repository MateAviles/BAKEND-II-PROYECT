

import { Router } from "express";

import {sessionTest} from "../controllers/session.controller.js";

const router = Router();

router.get( "/", sessionTest);

export default router;