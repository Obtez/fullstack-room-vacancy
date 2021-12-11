import express, {Request, Response} from 'express';
import mongoose from "mongoose"
import RoomModel from "../models/room"
import {Room} from "../types/room"

// get all rooms
export function getAllRooms(req: Request, res: Response) {
  RoomModel.find({}, (err, rooms) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(rooms)
  })
}

// get room by id
export function getRoomById(req: Request, res: Response) { 
  RoomModel.findById(req.params.id, (err: any, room: any) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(room)
  })
}

// create new room
export function createRoom(req: Request, res: Response) {
  const room = new RoomModel(req.body)
  room.save((err: any, room: any) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(room)
  })
}

// update room by id
export function updateRoomById(req: Request, res: Response) { 
  RoomModel.findByIdAndUpdate(req.params.id, req.body, (err: any, room: any) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(room)
  })
}

// delete room by id
export function deleteRoomById(req: Request, res: Response) { 
  RoomModel.findByIdAndRemove(req.params.id, (err: any, room: any) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json(room)
  })
}