export type IMapStore = IMapState & IMapActions

type IMapState = {
  tiles: IMapTile[]
  activeTile: string
  projection: IMapProjection
  showParcelLayer: boolean
  showBuildings: boolean
  showTerrain: boolean
  showHiddenFeatures: boolean
}

type IMapActions = {
  setActiveTile: (tileId: string) => void
  setProjection: (projection: IMapState["projection"]) => void
  setShowParcelLayer: (show: IMapState["showParcelLayer"]) => void
  setShowBuildings: (show: IMapState["showBuildings"]) => void
  setShowTerrain: (show: boolean) => void
  setShowHiddenFeatures: (show: boolean) => void
}

export type IMapTile = {
  uuid: string
  title: string
  serverUrl: string
  type: "vector" | "raster" | "hybrid"
  thumbnail: string
  provider: string
  providerLogo: string
  isHiddenTile: boolean
}

export type IMapProjection = "globe" | "mercator"