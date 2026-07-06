

import mongoose from "mongoose";

export const validateMongoId = (req, res, next) => {
    const {id} = params.id;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            message: "Invalid MongoDB ID"
        });
    }

    next();
};