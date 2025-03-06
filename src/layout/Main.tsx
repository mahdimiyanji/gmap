import React from "react"
import Divider from "@mui/material/Divider"
import Sidebar from "../components/sidebar/Sidebar"
import Map from "../components/map/Map"
import SecondSide from "../components/sidebar/SecondSide"
import HiddenFeatures from "@/components/hidden-features/HiddenFeatures"

const Main = () => {
  return (
    <div className="w-full h-full flex">
      <Sidebar />
      
      <Divider orientation="vertical" />
      
      <SecondSide />

      <Map />
      
      <HiddenFeatures />
    </div>
  )
}

export default Main