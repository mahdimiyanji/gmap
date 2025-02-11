import { ImmerStateCreator } from "../types"
import { IMapMainSlice } from "./types"
import tileServersConfig from "./tileServersConfig"

export const mapMainSlice: ImmerStateCreator<IMapMainSlice> = set => ({
  tiles: tileServersConfig,
  activeTile: tileServersConfig[0].uuid,
  projection: "globe",
  
  setActiveTile: tileId => {
    set(state => {
      state.activeTile = tileId
    })
  },
  
  setProjection: newProjection => {
    set({ projection: newProjection })
  }
})