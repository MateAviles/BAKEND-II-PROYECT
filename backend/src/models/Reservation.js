

import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        min: 1
    },

    reservationDate: {
        type: Date,
        default: Date.now
    }, 

    status: {

    type: String,
    required: true,

    enum: [

        "pending",

        "confirmed",

        "cancelled"

    ],

    default: "pending"

    }

},
{
    timestamps: true
});

const Reservation = mongoose.model(
    "Reservation",
    reservationSchema
);

export default Reservation;