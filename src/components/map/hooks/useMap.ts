import { MutableRefObject, useContext } from "react"
import { MapContext } from "@/components/map/controllers/MountingMap.tsx"

const useMap = (): MutableRefObject<mapboxgl.Map> => {
  if (MapContext === undefined) {
    throw new Error("useMap must be used within the map")
  }
  const context = useContext(MapContext)
  return context
}

export default useMap