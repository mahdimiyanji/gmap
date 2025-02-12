import React, { useMemo } from "react"
import MapGL from "react-map-gl/mapbox"
import "@core/packages/mapbox-gl.js"
import "@core/packages/mapbox-gl.css"
import styles from "./styles.module.css"
import useMapStore from "./store/useMapStore"
import MapToolbox from "./toolbox/MapToolbox"
import Buildings from "./controllers/Buildings"
import Terrain from "./controllers/Terrain"
import Projection from "./controllers/projection/Projection.tsx"

// eslint-disable-next-line @stylistic/max-len
const accessToken = "pk.eyJ1Ijoic3ZjLW9rdGEtbWFwYm94LXN0YWZmLWFjY2VzcyIsImEiOiJjbG5sMnExa3kxNTJtMmtsODJld24yNGJlIn0.RQ4CHchAYPJQZSiUJ0O3VQ"

const Map = () => {
  
  const tiles = useMapStore(state => state.tiles)
  const activeTile = useMapStore(state => state.activeTile)
  const showBuildings = useMapStore(state => state.showBuildings)
  const projection = useMapStore(state => state.projection)
  
  const activeStyle = useMemo(() => {
    return tiles.find(tile => tile.uuid === activeTile)!.serverUrl
  }, [activeTile])
  
  const mapProjection = useMemo(() => {
    return { name: projection }
  }, [projection])
  
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
        projection={mapProjection}
        style={{ fontFamily: "unset" }}
      >
        <MapToolbox />
 
        {
          showBuildings &&
          <Buildings />
        }
        
        <Terrain />
        
        <Projection />
      </MapGL>
    </div>
  )
}

export default Map