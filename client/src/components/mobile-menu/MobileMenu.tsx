import {useState} from 'react'
import { Link } from "react-router-dom"
import {HiOutlineMenu} from 'react-icons/hi'
import styles from "./MobileMenu.module.scss"
import Header from '../header/Header'
import Footer from '../footer/Footer'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.mobileMenu}>
        {
          isOpen ? (
          <div className={styles.mobileMenuContainer}>
            <div className={styles.flexContainer}>
              <div>
                <Header bannerType="back" page="menu" />
                <HiOutlineMenu className={styles.menuToggle} onClick={handleClick} />
              </div>
              <ul>
                <li><Link to="/account" onClick={handleClick}>Account Info</Link></li>
                <li><Link to="/room-list" onClick={handleClick}>Find Vacant Room</Link></li>
                <li><Link to="/advanced-search" onClick={handleClick}>Advanced Search</Link></li>
                <li><Link to="/scheduled" onClick={handleClick}>Scheduled Rooms</Link></li>
              </ul>
              <Link to="/login" className={styles.logoutLink}>LOGOUT</Link>
              <Footer />
            </div>
          </div>
          ) : (
          <HiOutlineMenu className={styles.menuToggle} onClick={handleClick} />
          )
        }
      </div>
  )
}

export default MobileMenu