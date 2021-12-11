import { IRoom, IBuilding } from "../../types/roomTypes";

export function sortRoomsByName(rooms: IRoom[]): IRoom[] {
  return rooms.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

export function sortRoomsByFloor(rooms: IRoom[]): IRoom[] {
  return rooms.sort((a, b) => {
    if (a.floor < b.floor) {
      return -1;
    }
    if (a.floor > b.floor) {
      return 1;
    }
    return 0;
  });
}

export function getBuildingsFromRooms(rooms: IRoom[]): string[] {
  const buildings: string[] = [];
  for (let i = 0; i < rooms.length; i++) {
    if (!buildings.includes(rooms[i].building)) {
      buildings.push(rooms[i].building);
    }
  }

  return buildings;
}

export function matchRoomsToBuildings(rooms: IRoom[]): IBuilding[] {
  const buildings: string[] = getBuildingsFromRooms(rooms)

  const roomsSortedByName = sortRoomsByName(rooms);
  const roomsSortedByFloor = sortRoomsByFloor(rooms);

  const detailedBuildings = buildings.map((building: string) => {
    return {
      building,
      rooms: roomsSortedByFloor.filter((room: IRoom) => room.building === building)
    }
  }
  )

  return detailedBuildings;
}