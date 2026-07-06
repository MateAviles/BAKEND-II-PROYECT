

import mongoose from "mongoose";

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        succes: false,
        message: err.message || "Internal Server Error"
    });
};