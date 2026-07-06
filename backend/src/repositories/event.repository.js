

import Event from "../models/Event.js"

class EventRepository{
    async findAll(){
        return await Event.find();
    }

    async findById(id){
        return await Event.findById(id);
    }

    async create(data){
        return await Event.create(data);
    }

    async update(id, data){
        return await Event.findByIdAndUpdate(id, data, {
            new:true
        });
    }

    async delete(id){
        return Event.findByIdAndDelete(id);
    }

}

export default new EventRepository();