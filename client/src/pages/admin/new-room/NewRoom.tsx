import {useState} from 'react';
import Header from "../../../components/header/Header"
import ToggleItem from "../../../components/toggle-item/ToggleItem"
import {IRoom} from "../../../types/roomTypes"
import styles from "./NewRoom.module.scss"

const emptyRoom: IRoom = {
  name: "",
  building: "",
  floor: "",
  capacity: 0,
  infrastructure: []
}



const NewRoom = () => {
  const [roomData, setRoomData] = useState<IRoom>(emptyRoom)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setRoomData({...roomData, [name]: value})
  }

  return (
    <div className={styles.newRoom}>
      <div>
        <Header bannerType="back" page="new-room" />
      </div>
      <div className={styles.content}>
        <h2>Create a new room</h2>
        <form>
          <ToggleItem label="Room Number" name="roomNr">
            <input type="text" name="roomNr" id="roomNr" onChange={handleChange} />
          </ToggleItem>

          <ToggleItem label="Available Dates" name="availableDates">
            <input type="date" name="availableDates" id="availableDates" onChange={handleChange} />
          </ToggleItem>

          <ToggleItem label="Available Time" name="availableTime">
            <input type="time" name="availableTime" id="availableTime" onChange={handleChange} />
          </ToggleItem>

          <ToggleItem label="Building" name="building">
            <input type="text" name="building" id="building" onChange={handleChange} />
          </ToggleItem>

          <ToggleItem label="Floor" name="floor">
            <input type="text" name="floor" id="floor" onChange={handleChange} />
          </ToggleItem>

          <ToggleItem label="Capacity" name="capacity">
            <input type="text" name="capacity" id="capacity" onChange={handleChange} />
          </ToggleItem>

          <ToggleItem label="Infrastructure" name="infrastructure">
            <input type="text" name="infrastructure" id="infrastructure" onChange={handleChange} />
          </ToggleItem>
        </form>

        <button type="button">Next</button>

      </div>

    </div>
  )
}

export default NewRoom