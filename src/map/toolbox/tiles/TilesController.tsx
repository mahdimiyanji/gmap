import React from "react"
import Tooltip from "@mui/material/Tooltip"
import Button from "@mui/material/Button"
import LayersIcon from "../../../@core/icons/LayersIcon.tsx"
import styles from "../styles.module.css"

type Props = {
  onClick: () => void
}

const TilesController = (props: Props) => {
  const { onClick } = props
  
  return (
    <Tooltip title="سرور های نقشه" placement="left-start">
      <Button className={styles.panelButton} onClick={onClick}>
        <LayersIcon />
      </Button>
    </Tooltip>
  )
}

export default TilesController