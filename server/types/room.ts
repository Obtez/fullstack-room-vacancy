export interface Room {
  name: string;
  bookedDates: string[];
  availableTimes: string[];
  building: string;
  floor: string;
  capacity: number;
  infrastructure: string[];
}