export type IMapMainSlice = IMapMainState & IMapMainActions

type IMapMainState = {
  tiles: IMapTile[]
  activeTile: string
  projection: IMapProjection
}

type IMapMainActions = {
  setActiveTile: (tileId: string) => void
  setProjection: (projection: IMapMainState["projection"]) => void
}

export type IMapTile = {
  uuid: string
  title: string
  serverUrl: string
  type: "vector" | "raster"
  thumbnail: string
  provider: string
  providerLogo: string
}

export type IMapProjection = "globe" | "mercator"