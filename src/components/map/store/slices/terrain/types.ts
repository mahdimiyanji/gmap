export type ITerrainSlice = ITerrainState & ITerrainActions

export type ITerrainState = {
  terrain: boolean
  exaggeration: number
}

type ITerrainActions = {
  setTerrain: (isOn: boolean) => void
}