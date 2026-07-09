

import Reservation from "../models/Reservation.js";

class ReservationRepository {

    async findAll() {
        return await Reservation.find();
    }

    async findById(id) {
        return await Reservation.findById(id);
    }

    async create(data) {
        return await Reservation.create(data);
    }

    async delete(id) {
        return await Reservation.findByIdAndDelete(id);
    }

}

export default new ReservationRepository();