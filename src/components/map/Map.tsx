import React, { useEffect, useRef, useState } from "react"
import styles from "./styles.module.css"
import MapToolbox from "./toolbox/MapToolbox"
import MapStyleSwitcher from "@/components/map/controllers/MapStyleSwitcher.tsx"
import MountingMap from "@/components/map/controllers/MountingMap.tsx"
import Projection from "@/components/map/controllers/projection/Projection.tsx"
import ParcelLayer from "@/components/map/controllers/parcel-layer/ParcelLayer.tsx"

// eslint-disable-next-line @stylistic/max-len
const accessToken = "pk.eyJ1Ijoic3ZjLW9rdGEtbWFwYm94LXN0YWZmLWFjY2VzcyIsImEiOiJjbG5sMnExa3kxNTJtMmtsODJld24yNGJlIn0.RQ4CHchAYPJQZSiUJ0O3VQ"

const Map = () => {
  
  const [, setIsMounted] = useState(false)
  
  const mapContainerRef = useRef<HTMLElement>(null)
  const mapRef = useRef<mapboxgl.Map>(null)
  
  useEffect(() => {
    if (mapContainerRef.current) {
      // @ts-ignore
      if (mapboxgl.getRTLTextPluginStatus() === "unavailable") {
        // @ts-ignore
        mapboxgl.setRTLTextPlugin(
          "packages/mapbox-gl-rtl-text.js",
          null,
          true // Lazy load the plugin
        )
      }
      
      
      // @ts-ignore
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v11",
        zoom: 1,
        accessToken
      })
      setIsMounted(true)
    }
  }, [])
  
  return (
    <>
      {/* @ts-ignore */}
      <div className={styles.mapContainer} ref={mapContainerRef} />

      <MountingMap mapRef={mapRef}>
        <MapToolbox />
      
        <MapStyleSwitcher />

        <Projection />
        
        <ParcelLayer />
      </MountingMap>

      {/* {*/}
      {/*  showBuildings &&*/}
      {/*  <Buildings />*/}
      {/* }*/}
        
      {/* <Terrain />*/}

      {/* </MapGL>*/}
    </>
  )
}

export default Map