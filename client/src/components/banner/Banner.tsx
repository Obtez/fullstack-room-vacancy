import Filter from "../filter/Filter";
import styles from "./Banner.module.scss";

interface IProps {
  type: string;
  text?: string;
}

const Banner = ({ type, text }: IProps) => {
  if (type === "text" && text) {
    return <p className={styles.banner}>{ text }</p>
  } else if (type === "back") {
    return <p className={styles.banner}>{"<- back"}</p>
  } else if (type === "filter") {
    return <Filter />
  }

  return null;
}

export default Banner;