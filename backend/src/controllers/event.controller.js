

import eventService from "../services/event.service.js";

export const getEvents = async(req,res)=>{
   try{
    const events = await eventService.getEvents();

    res.json(events);

   }catch(error){
        res.status(500).json({
            message:error.message
        });
        
   }
};

export const getEventById = async(req,res)=>{
    try{
        const event = await eventService.getEventById(req.params.id);

        res.json(event);

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}

export const createEvent = async(req,res)=>{
    try{
        const event = await eventService.createEvent(req.body);

        res.status(201).json(event);

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}

export const updateEvent = async(req,res)=>{
    try{
        const event = await eventService.updateEvent(req.params.id, req.body);

        res.json(event);

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}

export const deleteEvent = async(req,res)=>{
    try{
        const event = await eventService.deleteEvent(req.params.id);

        res.json(event);

    }catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}