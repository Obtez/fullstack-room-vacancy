import { render, screen } from "@testing-library/react"
import {rooms, unsortedRoomsByName, unsortedRoomsByFloor} from "../../mocks/roomsMock"
import RoomList from "./RoomList"
import { getBuildingsFromRooms, matchRoomsToBuildings, sortRoomsByFloor, sortRoomsByName } from "./roomListHelper"

test("return rooms in order by name", () => {
  const mock = unsortedRoomsByName
  const result = [
    {
      name: "A01",
      building: "Building A",
      floor: "0",
      capacity: 25,
      infrastructure: []
    },
    {
      name: "A02",
      building: "Building A",
      floor: "0",
      capacity: 25,
      infrastructure: []
    },
    {
      name: "A03",
      building: "Building A",
      floor: "0",
      capacity: 25,
      infrastructure: []
    }
  ]
  
  expect(sortRoomsByName(mock)).toEqual(result)
})

test("return rooms in order by floor", () => {
  const mock = unsortedRoomsByFloor
  const result = [{
    name: "A02",
    building: "Building A",
    floor: "0",
    capacity: 25,
    infrastructure: []
  },
  {
    name: "A03",
    building: "Building A",
    floor: "0",
    capacity: 25,
    infrastructure: []
    },
  {
    name: "A01",
    building: "Building A",
    floor: "0",
    capacity: 25,
    infrastructure: []
  },
  {
    name: "A11",
    building: "Building A",
    floor: "1",
    capacity: 30,
    infrastructure: []
  },
  {
    name: "A12",
    building: "Building A",
    floor: "1",
    capacity: 20,
    infrastructure: []
  },
  {
    name: "A13",
    building: "Building A",
    floor: "1",
    capacity: 40,
    infrastructure: []
  },]

  expect(sortRoomsByFloor(mock)).toEqual(result)
})

test("return an array of unique buildings from array of rooms", () => {
  const mock = rooms
  const result = ["Building A", "Building B"]
  expect(getBuildingsFromRooms(mock)).toEqual(result)
})


test("return an array of unique building objects with their rooms", () => {
  const mock = rooms
  const result = [
    {
      building: "Building A",
      rooms: [
        {
          name: "A01",
          building: "Building A",
          floor: "0",
          capacity: 25,
          infrastructure: []
        },
        {
          name: "A02",
          building: "Building A",
          floor: "0",
          capacity: 25,
          infrastructure: []
        },
        {
          name: "A03",
          building: "Building A",
          floor: "0",
          capacity: 25,
          infrastructure: []
        },
        {
          name: "A11",
          building: "Building A",
          floor: "1",
          capacity: 30,
          infrastructure: []
        },
        {
          name: "A12",
          building: "Building A",
          floor: "1",
          capacity: 20,
          infrastructure: []
        },
        {
          name: "A13",
          building: "Building A",
          floor: "1",
          capacity: 40,
          infrastructure: []
        }
      ]
    },
    {
      building: "Building B",
      rooms: [
        {
          name: "B01",
          building: "Building B",
          floor: "0",
          capacity: 25,
          infrastructure: []
        },
        {
          name: "B02",
          building: "Building B",
          floor: "0",
          capacity: 25,
          infrastructure: []
        },
        {
          name: "B03",
          building: "Building B",
          floor: "0",
          capacity: 25,
          infrastructure: []
        },
        {
          name: "B11",
          building: "Building B",
          floor: "1",
          capacity: 30,
          infrastructure: []
        },
        {
          name: "B12",
          building: "Building B",
          floor: "1",
          capacity: 20,
          infrastructure: []
        },
        {
          name: "B13",
          building: "Building B",
          floor: "1",
          capacity: 40,
          infrastructure: []
        }
      ]
    }
  ]
  expect(matchRoomsToBuildings(mock)).toEqual(result)
})