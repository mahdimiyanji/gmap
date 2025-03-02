import React from "react"
import { v4 as uuid } from "uuid"
import LayersIcon from "@mui/icons-material/Layers"
import MapIcon from "@mui/icons-material/Map"
import { ISidebarItem } from "./store/types.ts"
import BaseMap from "./base-map/BaseMap.tsx"
import CustomLayers from "@/components/sidebar/custom-layers/CustomLayers.tsx"

const sidebarItems: ISidebarItem[] = [
  {
    uuid: uuid(),
    component: <BaseMap />,
    title: "نقشه پایه",
    icon: <MapIcon />
  },
  {
    uuid: uuid(),
    component: <CustomLayers />,
    title: "لایه‌ها",
    icon: <LayersIcon />
  }
]

export default sidebarItems