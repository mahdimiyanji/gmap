import React, { useState } from "react"
import { ISettingsItem } from "./types.ts"
import BuildingsIcon from "../../../@core/icons/BuildingsIcon.tsx"
import Tabs from "./Tabs"
import Buildings from "./buildings/Buildings.tsx"
import styles from "./styles.module.css"
import TerrainIcon from "../../../@core/icons/TerrainIcon.tsx"
import Terrain from "./terrain/Terrain.tsx"

const Settings = () => {
  
  const [activeSettingsItemName, setActiveSettingsItemName] = useState("buildings")
  
  const settingsItems: ISettingsItem[] = [
    {
      uniqueName: "buildings",
      icon: <BuildingsIcon />,
      tooltipText: "نمای سه بعدی ساختمان ها",
      tabPanel: <Buildings />
    },
    {
      uniqueName: "terrain",
      icon: <TerrainIcon />,
      tooltipText: "توپوگرافی",
      tabPanel: <Terrain />
    }
  ]
  
  const handleChange = (newValue: string) => {
    setActiveSettingsItemName(newValue)
  }
  
  const activeSettings = settingsItems.find(item => item.uniqueName === activeSettingsItemName)!
  
  return (
    <div className={styles.settingsContainer}>
      <Tabs
        tabs={settingsItems}
        activeTab={activeSettingsItemName}
        onChange={handleChange}
      />
      
      {
        activeSettings.tabPanel
      }
    </div>
  )
}

export default Settings