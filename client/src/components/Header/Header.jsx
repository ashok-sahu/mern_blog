import React from "react";
import styles from './HeaderStyle.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.heading}>MERN BLOG WEBSITE</h1>
    </div>
  );
};

export default Header;
