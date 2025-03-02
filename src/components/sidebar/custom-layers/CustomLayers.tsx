import React from "react"
import clsx from "clsx"
import Switch from "@mui/material/Switch"
import useMapStore from "@/components/map/store/useMapStore.ts"

const CustomLayers = () => {
  
  const parcelLayer = useMapStore(state => state.parcelLayer)
  const setParcelLayer = useMapStore(state => state.setParcelLayer)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setParcelLayer(e.target.checked)
  }
  
  return (
    <div className="p-1.5">
      <p className="text-lg">لایه‌ها</p>
        
      <div className="flex flex-col gap-1.5">
        <div className={clsx("w-full flex bg-gray-50 rounded-lg items-center justify-between")}>
          <div className="p-1">
            <p className="text-md font-bold">خانه‌ها و پلاک‌ها</p>
          </div>
                
          <div className="">
            <Switch
              checked={parcelLayer}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default CustomLayers