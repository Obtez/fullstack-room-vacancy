import styles from "./Filter.module.scss"

const Filter = () => {
  return (
    <div className={styles.filter}>
      <input type="checkbox" id="free-rooms-filter" />
      <label htmlFor="free-rooms-filter">show only free rooms</label>
    </div>
  )
}

export default Filter