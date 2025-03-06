import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { IMapStore } from "./types"
import tileServersConfig from "@/components/sidebar/base-map/tileServersConfig.ts"

const useMapStore = create(subscribeWithSelector(immer<IMapStore>((set, getState) => ({
  tiles: tileServersConfig,
  activeTile: tileServersConfig[0].uuid,
  projection: "globe",
  showParcelLayer: false,
  showBuildings: false,
  showTerrain: false,
  showHiddenFeatures: false,
  
  setActiveTile: tileId => {
    set(state => {
      state.activeTile = tileId
    })
  },
  
  setProjection: newProjection => {
    set({ projection: newProjection })
  },
  
  setShowParcelLayer: show => {
    set({ showParcelLayer: show })
  },
  
  setShowBuildings: show => {
    set(state => {
      state.showBuildings = show
    })
  },
  
  setShowTerrain: show => {
    set({ showTerrain: show })
  },
  
  setShowHiddenFeatures: show => {
    set({ showHiddenFeatures: show })
  }
}))))

export default useMapStore