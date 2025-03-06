import React from "react"
import { v4 as uuid } from "uuid"
import LayersIcon from "@mui/icons-material/Layers"
import MapIcon from "@mui/icons-material/Map"
import { ISidebarItem } from "./store/types"
import BaseMap from "./base-map/BaseMap"
import CustomLayers from "@/components/sidebar/custom-layers/CustomLayers"

const sidebarItems: ISidebarItem[] = [
  {
    uuid: uuid(),
    component: <BaseMap />,
    title: "نقشه پایه",
    icon: <MapIcon />,
    isHiddenFeature: false
  },
  {
    uuid: uuid(),
    component: <CustomLayers />,
    title: "لایه‌ها",
    icon: <LayersIcon />,
    isHiddenFeature: true
  }
]

export default sidebarItems