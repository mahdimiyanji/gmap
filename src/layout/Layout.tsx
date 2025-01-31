import React from "react"
import styles from "./styles.module.css"
import Sidebar from "./Sidebar.tsx"
import Map from "../map/Map.tsx"

const Layout = () => {
  return (
    <div className={styles.pageLayout}>
      <Sidebar />

      <Map />
    </div>
  )
}

export default Layout