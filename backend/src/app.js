

import express from "express";

import categoryRouter from "./routes/category.routes.js";

import eventRouter from "./routes/event.routes.js";

import healthRouter from "./routes/health.routes.js";

import sessionRouter from "./routes/session.routes.js";

const app = express();

app.use(express.json());

app.use("/api/categories", categoryRouter);

app.use("/api/events", eventRouter);

app.use("/api/health", healthRouter);

app.use("/api/sessions", sessionRouter);

export default app;

