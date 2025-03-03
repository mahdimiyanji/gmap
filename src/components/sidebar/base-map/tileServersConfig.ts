import { v4 as uuid } from "uuid"
import { IMapTile } from "../../map/store/slices/main/types.ts"

const tileServersConfig: IMapTile[] = [
  {
    uuid: uuid(),
    serverUrl: "https://api.mapbox.com/styles/v1/mapbox/standard?access_token=pk.eyJ1Ijoic3ZjLW9rdGEtbWFwYm94LXN0YWZmLWFjY2VzcyIsImEiOiJjbG5sMnExa3kxNTJtMmtsODJld24yNGJlIn0.RQ4CHchAYPJQZSiUJ0O3VQ",
    title: "Standard",
    type: "vector",
    thumbnail: "/images/map-styles/standard.webp",
    provider: "Mapbox",
    providerLogo: "/images/providers-logo/mapbox.svg"
  },
  {
    uuid: uuid(),
    serverUrl: "https://api.mapbox.com/styles/v1/mapbox/light-v11?access_token=pk.eyJ1Ijoic3ZjLW9rdGEtbWFwYm94LXN0YWZmLWFjY2VzcyIsImEiOiJjbG5sMnExa3kxNTJtMmtsODJld24yNGJlIn0.RQ4CHchAYPJQZSiUJ0O3VQ",
    title: "Light",
    type: "vector",
    thumbnail: "/images/map-styles/light.webp",
    provider: "Mapbox",
    providerLogo: "/images/providers-logo/mapbox.svg"
  },
  {
    uuid: uuid(),
    serverUrl: "https://api.mapbox.com/styles/v1/mapbox/dark-v11?access_token=pk.eyJ1Ijoic3ZjLW9rdGEtbWFwYm94LXN0YWZmLWFjY2VzcyIsImEiOiJjbG5sMnExa3kxNTJtMmtsODJld24yNGJlIn0.RQ4CHchAYPJQZSiUJ0O3VQ",
    title: "Dark",
    type: "vector",
    thumbnail: "/images/map-styles/dark.webp",
    provider: "Mapbox",
    providerLogo: "/images/providers-logo/mapbox.svg"
  },
  {
    uuid: uuid(),
    serverUrl: "https://api.mapbox.com/styles/v1/mapbox/outdoors-v12?access_token=pk.eyJ1Ijoic3ZjLW9rdGEtbWFwYm94LXN0YWZmLWFjY2VzcyIsImEiOiJjbG5sMnExa3kxNTJtMmtsODJld24yNGJlIn0.RQ4CHchAYPJQZSiUJ0O3VQ",
    title: "Outdoors",
    type: "vector",
    thumbnail: "/images/map-styles/outdoors.webp",
    provider: "Mapbox",
    providerLogo: "/images/providers-logo/mapbox.svg"
  },
  {
    uuid: uuid(),
    serverUrl: "https://tiles.raah.ir/dynamic/new_style_preview.json",
    title: "Balad",
    type: "vector",
    thumbnail: "/images/providers-logo/balad.svg",
    provider: "Balad",
    providerLogo: "/images/providers-logo/balad.svg"
  }
]

export default tileServersConfig