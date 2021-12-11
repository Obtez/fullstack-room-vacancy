import Banner from "../banner/Banner"
import MobileMenu from "../mobile-menu/MobileMenu"
import styles from "./Header.module.scss"

interface IProps {
  bannerType: string,
  page: string
}

const Header = ({ bannerType, page }: IProps) => {
  const getHeaderText = () => {
    switch (page) {
      case "room-list":
        return <p>find <span>vacant</span> room</p>
      
      case "menu":
        return <p>menu</p>
      
      case "scheduled":
        return <p>your schedule</p>
      
      case "admin":
        return <p>admin panel</p>
      
      case "new-room":
        return <p>new room</p>

      case "edit-room":
        return <p>edit room</p>
      
      case "edit-users":
        return <p>edit users</p>
        
      default:
        return null
    }
  }

  return (
    <>
    <header className={styles.header}>
      <div>
        {getHeaderText()}
        <img src="./assets/door-logo.svg" alt="door logo" width="21.5px" height="32.5px" />
      </div>
      </header>
      <div className={styles.polygon}></div>
      <Banner type={bannerType} />
      <MobileMenu  />
    </>
  )
}

export default Header