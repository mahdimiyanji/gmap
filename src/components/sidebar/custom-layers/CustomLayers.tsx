import React from "react"
import clsx from "clsx"
import Switch from "@mui/material/Switch"
import InfoIcon from "@mui/icons-material/Info"
import useMapStore from "@/components/map/store/useMapStore.ts"

const CustomLayers = () => {
  
  const showTerrain = useMapStore(state => state.showTerrain)
  const setShowTerrain = useMapStore(state => state.setShowTerrain)
  const showParcelLayer = useMapStore(state => state.showParcelLayer)
  const setShowParcelLayer = useMapStore(state => state.setShowParcelLayer)
  const showBuildings = useMapStore(state => state.showBuildings)
  const setShowBuildings = useMapStore(state => state.setShowBuildings)
  
  return (
    <div className="p-1.5">
      <p className="text-lg">لایه‌ها</p>
        
      <div className="flex flex-col gap-1.5 pt-2">
        <div className={clsx("w-full bg-gray-100 p-1 rounded-lg")}>
          <div className="flex items-center justify-between">
            <p className="text-md font-bold">خانه‌ها و پلاک‌ها</p>
            
            <Switch
              checked={showParcelLayer}
              onChange={e => setShowParcelLayer(e.target.checked)}
            />
          </div>
          
          <div className="flex gap-1 items-center text-gray-500 text-xs">
            <InfoIcon fontSize="small" />
            
            <p>داده‌ها از شرکت ملی پست (Gnaf) می‌باشند.</p>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5 pt-2">
        <div className={clsx("w-full bg-gray-100 p-1 rounded-lg")}>
          <div className="flex items-center justify-between">
            <p className="text-md font-bold">توپوگرافی</p>
            
            <Switch
              checked={showTerrain}
              onChange={e => setShowTerrain(e.target.checked)}
            />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col gap-1.5 pt-2">
        <div className={clsx("w-full bg-gray-100 p-1 rounded-lg")}>
          <div className="flex items-center justify-between">
            <p className="text-md font-bold">ساختمان‌ها 3D</p>
            
            <Switch
              checked={showBuildings}
              onChange={e => setShowBuildings(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomLayers