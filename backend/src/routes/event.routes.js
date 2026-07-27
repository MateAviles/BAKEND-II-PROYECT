

import { Router } from "express";

import {getEvents, getEventById, createEvent, updateEvent, deleteEvent} from "../controllers/event.controller.js";

import { auth } from "../middlewares/auth.js";

import { authorize } from "../middlewares/authorize.js";

const router = Router();

router.get("/", getEvents);

router.get("/:id", getEventById);

router.post("/", auth, authorize("admin"), createEvent);

router.put("/:id", auth, authorize("admin"), updateEvent);

router.delete("/:id", auth, authorize("admin"), deleteEvent);

export default router;