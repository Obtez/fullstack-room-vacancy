import { Link } from "react-router-dom"
import Header from "../../../components/header/Header"
import styles from "./AdminPanel.module.scss"

const AdminPanel = () => {
  return (
    <div className={styles.adminPanel}>
      <div>
        <Header bannerType="back" page="admin" />
      </div>
      <div className={styles.flexContainer}>
        <Link to="/new-room">create a new room</Link>
        <Link to="/edit-room">edit rooms</Link>
        <Link to="/edit-users">edit users</Link>
      </div>
    </div>
  )
}

export default AdminPanel