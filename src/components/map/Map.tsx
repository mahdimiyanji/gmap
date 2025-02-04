import React, { useMemo } from "react"
import MapGL from "react-map-gl"
import "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import styles from "./styles.module.css"
import useMapStore from "./store/useMapStore"
import MapToolbox from "./toolbox/MapToolbox"
import Buildings from "./controllers/Buildings"
import Terrain from "./controllers/Terrain"

// eslint-disable-next-line @stylistic/max-len
const accessToken = "pk.eyJ1Ijoic3ZjLW9rdGEtbWFwYm94LXN0YWZmLWFjY2VzcyIsImEiOiJjbG5sMnExa3kxNTJtMmtsODJld24yNGJlIn0.RQ4CHchAYPJQZSiUJ0O3VQ"

const Map = () => {
  
  const tiles = useMapStore(state => state.tiles)
  const activeTile = useMapStore(state => state.activeTile)
  const showBuildings = useMapStore(state => state.showBuildings)
  
  const activeStyle = useMemo(() => {
    return tiles.find(tile => tile.uuid === activeTile)!.serverUrl
  }, [])
  
  return (
    <div className={styles.mapContainer}>
      <MapGL
        initialViewState={
          {
            longitude: 51.3755,
            latitude: 35.7450,
            zoom: 2
          }
        }
        mapStyle={activeStyle}
        mapboxAccessToken={accessToken}
        styleDiffing
        projection={{ name: "globe" }}
        style={{ fontFamily: "unset" }}
      >
        <MapToolbox />
 
        {
          showBuildings &&
          <Buildings />
        }
        
        <Terrain />
      </MapGL>
    </div>
  )
}

export default Map