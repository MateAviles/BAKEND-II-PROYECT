

import eventRepository from "../repositories/event.repository.js";

class EventService {
    async getEvents(){
        return await eventRepository.findAll();
    }

    async getEventById(id){
        return await eventRepository.findById(id);
    }

    async createEvent(data){
        return await eventRepository.create(data);
    }

    async updateEvent(id, data){
        return await eventRepository.update(id, data);
    }

    async deleteEvent(id){
        return await eventRepository.delete(id);
    }

}

export default new EventService();