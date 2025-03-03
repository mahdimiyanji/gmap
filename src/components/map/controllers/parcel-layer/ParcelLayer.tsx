import { useEffect } from "react"
import useMap from "@/components/map/hooks/useMap.ts"
import useMapStore from "@/components/map/store/useMapStore.ts"

const ParcelLayer = () => {
  
  const mapRef = useMap()
  const map = mapRef.current
  
  // save projection of map in local storage
  useEffect(() => {
    const unSubscribe = useMapStore.subscribe(
      state => state.parcelLayer,
      newStatus => {
        if (newStatus) {
          addParcelLayer()
        }
        else {
          // removeParcelLayer()
        }
      },
      { fireImmediately: true }
    )
    
    return () => {
      unSubscribe()
    }
  }, [])
  
  const addParcelLayer = () => {
    if (!map.getSource("parcels")) {
      map.addSource("parcels", {
        type: "vector",
        tiles: ["https://gnaf2.post.ir/tile/layers/group/{z}/{y}/{x}.pbf"],
        minzoom: 14
      })
      
      map.addLayer({
        "id": "parcels_l",
        "source": "parcels",
        "source-layer": "parcels",
        "type": "fill",
        "paint": {
          "fill-antialias": true,
          "fill-color": "#53c5db",
          "fill-opacity": 0.2
        },
        "minzoom": 8
      })
      
      map.addLayer({
        "id": "parcels_l-label",
        "source": "parcels",
        "source-layer": "parcel_plates",
        "type": "symbol",
        "minzoom": 14,
        "layout": {
          "text-offset": [
            0,
            0
          ],
          "text-size": [
            "interpolate",
            [
              "linear"
            ],
            [
              "zoom"
            ],
            15,
            0,
            16,
            10,
            19,
            15
          ],
          "text-font": [
            "Vazir Regular"
          ],
          "symbol-placement": "point",
          "text-field": [
            "case",
            [
              "has",
              "top_all_plates_fa"
            ],
            [
              "get",
              "top_all_plates_fa"
            ],
            [
              "has",
              "all_plates_fa"
            ],
            [
              "get",
              "all_plates_fa"
            ],
            [
              "has",
              "plate_no"
            ],
            [
              "number-format",
              [
                "to-number",
                [
                  "get",
                  "plate_no"
                ]
              ],
              { "locale": "fa-IR" }
            ],
            [
              "get",
              "text"
            ]
          ],
          "text-anchor": "center",
          "text-allow-overlap": false,
          "text-ignore-placement": false,
          "text-max-width": 30,
          "symbol-spacing": 800
        },
        "paint": {
          "text-color": "#2E0767",
          "text-translate": [
            0,
            0
          ]
        }
      })
    }
  }
  
  return null
}

export default ParcelLayer