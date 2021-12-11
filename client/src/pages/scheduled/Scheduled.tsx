import { useState } from 'react'
import {Link} from 'react-router-dom'
import { IBuilding } from '../../types/roomTypes';
import Header from "../../components/header/Header";
import styles from "./Scheduled.module.scss";
import Footer from '../../components/footer/Footer';

const Scheduled = () => {
  const [scheduledRooms, setScheduledRooms] = useState<IBuilding[]>([])

  return (
    <div className={styles.scheduled}>
      <div>
        <Header bannerType="back" page="scheduled" />
      </div>
      <div className={styles.flexContainer}>
        {
        scheduledRooms.length > 0 ? <p>WIP scheduled rooms display</p> : <p className={styles.error}>No Rooms Scheduled</p>
        }
        <Link to="/room-list">Find Vacant Room</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Scheduled;