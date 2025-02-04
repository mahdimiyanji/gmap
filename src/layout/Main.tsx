import React from "react"
import Sidebar from "../components/sidebar/Sidebar"
import Map from "../components/map/Map"

const Main = () => {
  return (
    <div className="w-full h-full flex">
      <Sidebar />

      <Map />
    </div>
  )
}

export default Main