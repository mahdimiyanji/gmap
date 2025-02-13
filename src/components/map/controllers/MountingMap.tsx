import { createContext, MutableRefObject } from "react"

// @ts-ignore
export const MapContext = createContext<MutableRefObject<mapboxgl.Map>>({})

type Props = {
  children: React.ReactNode
  mapRef: MutableRefObject<mapboxgl.Map | null>
}

const MountingMap = (props: Props) => {
  const { children, mapRef } = props
  
  if (mapRef.current === null) {
    return null
  }
  
  return (
    <MapContext.Provider value={mapRef as MutableRefObject<mapboxgl.Map>}>
      {children}
    </MapContext.Provider>
  )
}

export default MountingMap