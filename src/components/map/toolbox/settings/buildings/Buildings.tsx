import { useEffect } from "react"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Switch from "@mui/material/Switch"
import Tooltip from "@mui/material/Tooltip"
import { IBuildingsState } from "../../../store/slices/buildings/types"
import useMapStore from "../../../store/useMapStore"
import formStyles from "../styles.module.css"
import styles from "./styles.module.css"

const Buildings = () => {
  
  const buildingsTileUrl = useMapStore(state => state.buildingsTileUrl)
  const showBuildings = useMapStore(state => state.showBuildings)
  const setShowBuildings = useMapStore(state => state.setShowBuildings)
  
  // save buildings settings in local storage
  useEffect(() => {
    const unSubscribe = useMapStore.subscribe(
      state => [state.buildingsTileUrl, state.showBuildings],
      newConfig => {
        const configObject: IBuildingsState = {
          buildingsTileUrl: newConfig[0] as string,
          showBuildings: newConfig[1] as boolean
        }
        localStorage.setItem("__buildings", JSON.stringify(configObject))
      },
      { fireImmediately: true }
    )
    
    return () => {
      unSubscribe()
    }
  }, [])
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowBuildings(e.target.checked)
  }
  
  return (
    <div className={formStyles.tabPanel}>
      <p className={formStyles.tabPanelTitle}>نمای سه بعدی ساختمان ها</p>
      
      <Divider className={formStyles.tabPanelTitleDivider} />
      
      <div className={styles.buildingsForm}>
        <div className={styles.buildingsFormItem}>
          <p>نمایش ساختمان ها به صورت سه بعدی</p>
          
          <Switch checked={showBuildings} onChange={e => handleChange(e)} />
        </div>
        
        <div className={styles.buildingsFormItem}>
          <p>آدرس tile ها</p>
          
          <Tooltip title={buildingsTileUrl}>
            <p className={styles.tileName}>{buildingsTileUrl}</p>
          </Tooltip>
        </div>
        
        <div className={styles.buttonContainer}>
          <Button variant="outlined" size="small">
            افزودن آدرس جدید
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Buildings