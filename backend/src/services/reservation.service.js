
import reservationRepository from "../repositories/reservation.repository.js";

class ReservationService {

    async getReservations() {
        return await reservationRepository.findAll();
    }

    async getReservationById(id) {
        return await reservationRepository.findById(id);
    }

    async createReservation(data) {
        return await reservationRepository.create(data);W
    }

    async deleteReservation(id) {
        return await reservationRepository.delete(id);
    }

}

export default new ReservationService();