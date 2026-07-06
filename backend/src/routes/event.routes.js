

import { Router } from "express";

import {getEvents, getEventById, createEvent, updateEvent, deleteEvent} from "../controllers/event.controller.js";

const router = Router();

router.get("/", getEvents);

router.post("/", createEvent);

router.put("/:id", getEventById);

router.put("/:id", updateEvent);

router.delete("/:id", deleteEvent);

export default router;