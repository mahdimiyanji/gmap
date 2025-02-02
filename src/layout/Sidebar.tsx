import React from "react"
import styles from "./styles.module.css"

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/text-logo.svg" alt="logo" />
      </div>
    </div>
  )
}

export default Sidebar