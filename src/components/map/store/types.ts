import { IMapMainSlice } from "./slices/main/types"
import { IBuildingsSlice } from "./slices/buildings/types"
import { ITerrainSlice } from "./slices/terrain/types"

export type IMapStore =
  IMapMainSlice &
  IBuildingsSlice &
  ITerrainSlice