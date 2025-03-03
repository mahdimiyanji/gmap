import React from "react"
import clsx from "clsx"
import PolylineIcon from "@mui/icons-material/Polyline"
import useMapStore from "../../map/store/useMapStore.ts"

const StyleSelection = () => {
  
  const tiles = useMapStore(state => state.tiles)
  const activeTile = useMapStore(state => state.activeTile)
  const setActiveTile = useMapStore(state => state.setActiveTile)
  
  const clickHandler = (tileId: string) => {
    setActiveTile(tileId)
  }
  
  return (
    <>
      <p className="pt-3 pb-1 text-lg">استایل</p>
      
      <div className="flex flex-col gap-1.5">
        {
          tiles.map(tile => (
            <div
              className={
                clsx(
                  "w-full flex bg-gray-50 rounded-lg overflow-hidden cursor-pointer",
                  activeTile === tile.uuid && "bg-sky-100"
                )
              }
              onClick={() => clickHandler(tile.uuid)}
              key={tile.uuid}
            >
              <div className="w-[80px] h-[80px] p-0.5">
                <img
                  src={tile.thumbnail}
                  alt={tile.title}
                  className="rounded-lg"
                />
              </div>
            
              <div className="flex flex-1 flex-col items-between justify-between p-1 pt-1.5">
                <p className="text-md font-bold">{tile.title}</p>
              
                <div
                  className="flex w-fit py-0.5 px-1 gap-1 items-center rounded-full border-1 border-gray-300 text-gray-600 text-xs"
                >
                  <p>{tile.type}</p>
                
                  {/* <PolylineIcon sx={{ fontSize: 14 }} />*/}
                </div>
              </div>
            
              <div className="p-1">
                <div className="flex gap-0.5 items-end text-gray-800">
                  <p className="text-sm">{tile.provider}</p>
                
                  <img
                    src={tile.providerLogo}
                    alt="mapbox"
                    width="24"
                    height="24"
                  />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default StyleSelection