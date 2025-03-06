import React from "react"
import clsx from "clsx"
import useMapStore from "../../map/store/useMapStore.ts"
import { IMapProjection } from "../../map/store/types.ts"

const ProjectionSwitch = () => {
  
  const projection = useMapStore(state => state.projection)
  const setProjection = useMapStore(state => state.setProjection)
  
  const clickHandler = (newValue: IMapProjection) => {
    setProjection(newValue)
  }
  
  return (
    <>
      <p className="pb-1 text-lg">مدل نمایش</p>
      
      <div className="flex gap-1.5">
        <div
          className={
            clsx(
              "flex-1 overflow-hidden rounded-xl cursor-pointer",
              projection === "mercator"
                ? "border-2 border-sky-600"
                : "border-2 border-white"
            )
          }
          onClick={() => clickHandler("mercator")}
        >
          <img src="/images/projection/mercator.webp" alt="mercator" />
        </div>
        
        <div
          className={
            clsx(
              "flex-1 overflow-hidden rounded-xl cursor-pointer",
              projection === "globe"
                ? "border-2 border-sky-600"
                : "border-2 border-white"
            )
          }
          onClick={() => clickHandler("globe")}
        >
          <img src="/images/projection/globe.webp" alt="globe" />
        </div>
      </div>
    </>
  )
}

export default ProjectionSwitch