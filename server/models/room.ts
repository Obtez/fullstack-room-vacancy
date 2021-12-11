import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  defaultAvailableTimes: {
    type: [String],
    required: true,
  },
  bookings: {
    type: [String],
    required: true,
  },
  building: {
    type: String,
    required: true,
  },
  floor: {
    type: String,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  infrastructure: {
    type: [String],
    required: true,
  },
})

const RoomModel = mongoose.model('Room', roomSchema);

export default RoomModel;