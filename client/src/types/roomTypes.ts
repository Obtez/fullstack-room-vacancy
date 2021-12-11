export interface IRoom {
  name: string,
  building: string,
  floor: string,
  capacity: number,
  infrastructure: string[]
}

export interface IBuilding {
  building: string,
  rooms: IRoom[]
}