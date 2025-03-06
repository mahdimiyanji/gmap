import { memo, useEffect, useRef } from "react"
import useMapStore from "../store/useMapStore"
import useMap from "@/components/map/hooks/useMap.ts"

const Terrain = () => {
  
  const showTerrain = useMapStore(state => state.showTerrain)
  
  const isMapStylesLoaded = useRef(false)
  
  const mapRef = useMap()
  const map = mapRef.current
  
  useEffect(() => {
    if (isMapStylesLoaded.current) {
      handleTerrainTiles()
    }
    else {
      map.on("style.load", () => {
        isMapStylesLoaded.current = true
        handleTerrainTiles()
      })
    }
  }, [showTerrain, map])
  
  const handleTerrainTiles = () => {
    const isTerrainSourceLoaded = !!map.getSource("terrain")
    const isHillshadeSourceLoaded = !!map.getSource("hillshade-maptiler")
    
    if (showTerrain) {
      // when hmr reloads page, it adds the source again and throw an error, just check to not add it twice
      if (!isTerrainSourceLoaded) {
        map.addSource("terrain", {
          url: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=o8iIkgKwbGcsp7zAKldE",
          type: "raster-dem",
          tileSize: 256
        })
        
        map.setTerrain({
          source: "terrain",
          exaggeration: 1
        })
      }
      
      if (!isHillshadeSourceLoaded) {
        map.addSource("hillshade-maptiler", {
          type: "raster-dem",
          tileSize: 256,
          url: "https://api.maptiler.com/tiles/terrain-rgb-v2/tiles.json?key=o8iIkgKwbGcsp7zAKldE"
        })
        
        map.addLayer({
          id: "hillshade-maptiler",
          type: "hillshade",
          source: "hillshade-maptiler"
        })
      }
    }
    else {
      if (isTerrainSourceLoaded) {
        map.setTerrain(undefined)
        map.removeSource("terrain")
      }
      
      if (isHillshadeSourceLoaded) {
        map.removeLayer("hillshade-maptiler")
        map.removeSource("hillshade-maptiler")
      }
    }
  }
  
  return null
}

export default memo(Terrain)