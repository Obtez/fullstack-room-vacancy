import { useState } from "react";
import styles from "./ToggleItem.module.scss";

interface IProps {
  label: string;
  name: string;
  children: React.ReactNode;
}

const ToggleItem = ({ label, name, children }: IProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={styles.toggleItem}>
      <label htmlFor={name}>{ label }</label>
      {
        isOpen && <div className={styles.toggleBody}>{children}</div>
      }
    </div>
  )
}

export default ToggleItem;