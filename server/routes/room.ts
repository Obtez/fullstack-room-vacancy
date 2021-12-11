import express, { Request, Response } from 'express';
import { getAllRooms, getRoomById, createRoom, updateRoomById, deleteRoomById } from '../controllers/room';
const router = express.Router();

// @ GET /api/rooms/
// @ Desc: Get all rooms
// @ Access: Public
router.get("/", getAllRooms);

// @ GET /api/rooms/:id
// @ Desc: Get room by id
// @ Access: Public
router.get("/:id",getRoomById);

// @ POST /api/rooms/
// @ Desc: Create new room
// @ Access: Public
router.post("/", createRoom);

// @ PUT /api/rooms/:id
// @ Desc: Update room by id
// @ Access: Public
router.put("/:id", updateRoomById);

// @ DELETE /api/rooms/:id
// @ Desc: Delete room by id
// @ Access: Public
router.delete("/:id", deleteRoomById);

export default router;