import { ImmerStateCreator } from "../types"
import { ITerrainSlice } from "./types"

export const terrainSlice: ImmerStateCreator<ITerrainSlice> = set => ({
  terrain: false,
  exaggeration: 1,
  
  setTerrain: isOn => {
    set({ terrain: isOn })
  }
})