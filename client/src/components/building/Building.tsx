import { IBuilding } from "../../types/roomTypes"
import Room from "../room/Room"
import styles from "./Building.module.scss"

interface IProps {
  rooms: IBuilding | undefined,

}

const Building = ({ rooms }: IProps) => {
  if (!rooms) {
    return <p>Loading...</p>
  }

  return (
    <div className={styles.building}>
      <h2>{rooms.building}</h2>
      <ul>
        {
          rooms.rooms.map(room => <Room room={ room } />)
        }
      </ul>
    </div>
  )
 }

export default Building