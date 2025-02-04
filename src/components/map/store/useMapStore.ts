import { create } from "zustand"
import { subscribeWithSelector } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"
import { buildingsSlice } from "./slices/buildings/buildingsSlice"
import { mapMainSlice } from "./slices/main/mapMainSlice"
import { terrainSlice } from "./slices/terrain/terrainSlice"
import { IMapStore } from "./types"

const useMapStore = create(subscribeWithSelector(immer<IMapStore>((...params) => ({
  ...mapMainSlice(...params),
  ...buildingsSlice(...params),
  ...terrainSlice(...params)
}))))

export default useMapStore