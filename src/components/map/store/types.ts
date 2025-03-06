export type IMapStore = IMapState & IMapActions

type IMapState = {
  tiles: IMapTile[]
  activeTile: string
  projection: IMapProjection
  showParcelLayer: boolean
  showBuildings: boolean
  showTerrain: boolean
}

type IMapActions = {
  setActiveTile: (tileId: string) => void
  setProjection: (projection: IMapState["projection"]) => void
  setShowParcelLayer: (isOn: IMapState["showParcelLayer"]) => void
  setShowBuildings: (show: IMapState["showBuildings"]) => void
  setShowTerrain: (isOn: boolean) => void
}

export type IMapTile = {
  uuid: string
  title: string
  serverUrl: string
  type: "vector" | "raster" | "hybrid"
  thumbnail: string
  provider: string
  providerLogo: string
}

export type IMapProjection = "globe" | "mercator"