import React from "react"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import styles from "../styles.module.css"
import SettingsIcon from "../../../@core/icons/SettingsIcon.tsx"

type Props = {
  onClick: () => void
}

const SettingsButton = (props: Props) => {
  const { onClick } = props
  
  return (
    <Tooltip title="تنظیمات" placement="left-start">
      <Button className={styles.panelButton} onClick={onClick}>
        <SettingsIcon />
      </Button>
    </Tooltip>
  )
}

export default SettingsButton