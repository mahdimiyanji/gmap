import { memo, useEffect } from "react"
import useMapStore from "../../store/useMapStore"
import useMap from "@/components/map/hooks/useMap"

const Projection = () => {
  
  const map = useMap()
  
  const setProjection = useMapStore(state => state.setProjection)
  
  // load map projection from local storage in first render
  // projections can be: "mercator" or "globe"
  useEffect(() => {
    const loadedObject = localStorage.getItem("mapProjection")
    if (loadedObject) {
      if (loadedObject === "globe" || loadedObject === "mercator") {
        setProjection(loadedObject)
      }
      else {
        localStorage.removeItem("mapProjection")
      }
    }
  }, [])
  
  // save projection of map in local storage
  useEffect(() => {
    const unSubscribe = useMapStore.subscribe(
      state => state.projection,
      newProj => {
        localStorage.setItem("mapProjection", newProj)
        map.current.setProjection(newProj)
      },
      { fireImmediately: true }
    )

    return () => {
      unSubscribe()
    }
  }, [])
  
  return null
}

export default memo(Projection)