import {useState} from 'react'
import { IRoom } from "../../types/roomTypes"
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import {BsCalendarWeek} from 'react-icons/bs'
import {GoTriangleRight, GoTriangleDown} from 'react-icons/go'
import styles from "./Room.module.scss"

interface IProps {
  room: IRoom | undefined
}

const Room = ({ room }: IProps) => {
  const [isOpen, setIsOpen] = useState(false)

  if (!room) {
    return null
  }

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <li className={styles.room}>
      {
        isOpen ? <GoTriangleDown className={ styles.toggleIcon } onClick={toggleOpen} /> : <GoTriangleRight className={ styles.toggleIcon } onClick={toggleOpen} />
      }
      
      <div className={styles.roomData}>
        <div className={styles.roomDataHeading}>
          <p>Room - {room.name}</p>
          <AiOutlineCheckCircle className={styles.tick} />
        </div>

        {
          isOpen && (
          <div className={styles.roomDataBody}>
            <p><span>Busy: </span>"MISSING VARIABLE"</p>
            <p><span>Floor: </span>{ room.floor }</p>
            <p><span>Capacity: </span>{ room.capacity }</p>
            <p><span>Infrastructure: </span>{room.infrastructure}</p>
              
            <button type="button" className={styles.bookingBtn}>Book Room</button>
            <button type="button" className={styles.timetableBtn}><BsCalendarWeek /> Timetable</button>
          </div>
          )
        }
      </div>
    </li>
  )
}

export default Room