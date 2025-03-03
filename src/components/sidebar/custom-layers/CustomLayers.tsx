import React from "react"
import clsx from "clsx"
import Switch from "@mui/material/Switch"
import InfoIcon from "@mui/icons-material/Info"
import useMapStore from "@/components/map/store/useMapStore.ts"

const CustomLayers = () => {
  
  const terrain = useMapStore(state => state.terrain)
  const setTerrain = useMapStore(state => state.setTerrain)
  const parcelLayer = useMapStore(state => state.parcelLayer)
  const setParcelLayer = useMapStore(state => state.setParcelLayer)
  
  const handleParcelToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParcelLayer(e.target.checked)
  }
  
  const handleTopoToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerrain(e.target.checked)
  }
  
  return (
    <div className="p-1.5">
      <p className="text-lg">لایه‌ها</p>
        
      <div className="flex flex-col gap-1.5 pt-2">
        <div className={clsx("w-full bg-gray-100 p-1 rounded-lg")}>
          <div className="flex items-center justify-between">
            <p className="text-md font-bold">خانه‌ها و پلاک‌ها</p>
            
            <Switch
              checked={parcelLayer}
              onChange={handleParcelToggle}
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
              checked={terrain}
              onChange={handleTopoToggle}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomLayers