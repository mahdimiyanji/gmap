import { memo, useEffect, useRef } from "react"
import useMap from "@/components/map/hooks/useMap.ts"
import useMapStore from "@/components/map/store/useMapStore.ts"

const Buildings = () => {
  
  const showBuildings = useMapStore(state => state.showBuildings)
  
  const mapRef = useMap()
  const map = mapRef.current
  
  const isMapStylesLoaded = useRef(false)
  
  useEffect(() => {
    if (isMapStylesLoaded.current) {
      handleBuildingsTiles()
    }
    else {
      map.on("style.load", () => {
        isMapStylesLoaded.current = true
        handleBuildingsTiles()
      })
    }
  }, [showBuildings, map])
  
  
  const handleBuildingsTiles = () => {
    if (showBuildings) {
      console.log(map.getSource("3d-buildings"))
      if (!map.getSource("3d-buildings")) {
        map.addLayer({
          "id": "3d-buildings",
          "source": "composite",
          "source-layer": "building",
          "filter": ["==", "extrude", "true"],
          "type": "fill-extrusion",
          "minzoom": 15,
          "paint": {
            "fill-extrusion-color": "#aaa",
            "fill-extrusion-height": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "height"]
            ],
            "fill-extrusion-base": [
              "interpolate",
              ["linear"],
              ["zoom"],
              15,
              0,
              15.05,
              ["get", "min_height"]
            ],
            "fill-extrusion-opacity": 0.6
          }
        })
      }
    }
    else {
      if (map.getLayer("3d-buildings")) {
        map.removeLayer("3d-buildings")
      }
    }
  }
  
  return null
}

export default memo(Buildings)