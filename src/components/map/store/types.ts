import { IMapMainSlice } from "./slices/main/types"
import { ITerrainSlice } from "./slices/terrain/types"

export type IMapStore =
  IMapMainSlice &
  ITerrainSlice