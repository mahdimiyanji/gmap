import { ImmerStateCreator } from "../types"
import { IMapMainSlice } from "./types"
import tileServersConfig from "../../../../sidebar/base-map/tileServersConfig.ts"

export const mapMainSlice: ImmerStateCreator<IMapMainSlice> = set => ({
  tiles: tileServersConfig,
  activeTile: tileServersConfig[0].uuid,
  projection: "globe",
  parcelLayer: false,
  
  setActiveTile: tileId => {
    set(state => {
      state.activeTile = tileId
    })
  },
  
  setProjection: newProjection => {
    set({ projection: newProjection })
  },
  
  setParcelLayer: isOn => {
    set({ parcelLayer: isOn })
  }
})