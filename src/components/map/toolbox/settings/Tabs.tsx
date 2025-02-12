import React from "react"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import styles from "./styles.module.css"
import { ISettingsItem } from "./types"

type Props = {
  tabs: ISettingsItem[]
  activeTab: string
  onChange: (newValue: string) => void
}

const Tabs = (props: Props) => {
  const {
    tabs,
    onChange,
    activeTab
  } = props
  
  return (
    <div className={styles.tabs}>
      {
        tabs.map(tab => (
          <Tooltip
            title={tab.tooltipText}
            placement="left"
            onClick={
              e => {
                e.stopPropagation()
                e.preventDefault()
              }
            }
            key={tab.uniqueName}
          >
            <IconButton
              className={activeTab && styles.active}
              onClick={() => onChange(tab.uniqueName)}
            >
              {tab.icon}
            </IconButton>
          </Tooltip>
        ))
      }
    </div>
  )
}

export default Tabs