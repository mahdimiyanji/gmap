import { useEffect, useState } from "react"
import { useMap } from "react-map-gl/mapbox"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import styles from "../styles.module.css"
import CompassIcon from "../../../../@core/icons/CompassIcon"

const ResetNorth = () => {
  
  const map = useMap()
  
  const [bearing, setBearing] = useState<number>(0)
  
  const handleClick = () => {
    map.current?.resetNorth()
    map.current?.resetNorthPitch()
  }
  
  useEffect(() => {
    map.current?.on("rotate", e => {
      setBearing(e.target.getBearing())
    })
  }, [])
  
  return (
    <Tooltip title="شمال" placement="left-start">
      <Button className={styles.panelButton} onClick={handleClick}>
        <CompassIcon style={{ transform: `rotateZ(${bearing - 45}deg)`, color: "red" }} />
      </Button>
    </Tooltip>
  )
}

export default ResetNorth