import styles from "./HeaderLarge.module.scss";

const HeaderLarge = () => {
  return (
    <header>
      <div className={styles.headerLarge}>
        <div className={styles.headerLargeTop}>
          <p>vacant</p>
          <img src="./assets/door-logo.svg" alt="door logo" />
        </div>
      </div>
      <div className={styles.polygon}></div>
      <p className={styles.banner}>room scheduling for businesses</p>
    </header>
  )
}

export default HeaderLarge