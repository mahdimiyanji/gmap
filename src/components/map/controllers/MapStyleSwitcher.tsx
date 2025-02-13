import { useEffect } from "react"
import useMap from "@/components/map/hooks/useMap.ts"
import useMapStore from "@/components/map/store/useMapStore.ts"

const MapStyleSwitcher = () => {
  
  const map = useMap()
  
  
  const tiles = useMapStore(state => state.tiles)
  const activeTile = useMapStore(state => state.activeTile)
  
  
  useEffect(() => {
    const activeTileUrl = tiles.find(tile => tile.uuid === activeTile)!.serverUrl
    map.current.setStyle(activeTileUrl)
  }, [tiles, activeTile])
  
  
  return null
}

export default MapStyleSwitcher