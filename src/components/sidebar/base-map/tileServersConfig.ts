import { v4 as uuid } from "uuid"
import { IMapTile } from "../../map/store/types.ts"

const tileServersConfig: IMapTile[] = [
  {
    uuid: uuid(),
    serverUrl: "https://api.mapbox.com/styles/v1/mapbox/streets-v12?access_token=pk.eyJ1Ijoic3ZjLW9rdGEtbWFwYm94LXN0YWZmLWFjY2VzcyIsImEiOiJjbG5sMnExa3kxNTJtMmtsODJld24yNGJlIn0.RQ4CHchAYPJQZSiUJ0O3VQ",
    title: "روشن",
    type: "vector",
    thumbnail: "/images/map-styles/outdoors.webp",
    provider: "Mapbox",
    providerLogo: "/images/providers-logo/mapbox.svg"
  },
  {
    uuid: uuid(),
    serverUrl: "https://api.mapbox.com/styles/v1/mapbox/dark-v11?access_token=pk.eyJ1Ijoic3ZjLW9rdGEtbWFwYm94LXN0YWZmLWFjY2VzcyIsImEiOiJjbG5sMnExa3kxNTJtMmtsODJld24yNGJlIn0.RQ4CHchAYPJQZSiUJ0O3VQ",
    title: "تیره",
    type: "vector",
    thumbnail: "/images/map-styles/dark.webp",
    provider: "Mapbox",
    providerLogo: "/images/providers-logo/mapbox.svg"
  },
  {
    uuid: uuid(),
    serverUrl: "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v12?access_token=pk.eyJ1Ijoic3ZjLW9rdGEtbWFwYm94LXN0YWZmLWFjY2VzcyIsImEiOiJjbG5sMnExa3kxNTJtMmtsODJld24yNGJlIn0.RQ4CHchAYPJQZSiUJ0O3VQ",
    title: "ماهواره‌ای",
    type: "hybrid",
    thumbnail: "/images/map-styles/sattelite.webp",
    provider: "Mapbox",
    providerLogo: "/images/providers-logo/mapbox.svg"
  },
  {
    uuid: uuid(),
    serverUrl: "https://tiles.raah.ir/dynamic/new_style_preview.json",
    title: "بلد",
    type: "vector",
    thumbnail: "/images/providers-logo/balad.svg",
    provider: "Balad",
    providerLogo: "/images/providers-logo/balad.svg"
  },
  {
    uuid: uuid(),
    serverUrl: "https://api.mapbox.com/styles/v1/mapbox/standard?access_token=pk.eyJ1Ijoic3ZjLW9rdGEtbWFwYm94LXN0YWZmLWFjY2VzcyIsImEiOiJjbG5sMnExa3kxNTJtMmtsODJld24yNGJlIn0.RQ4CHchAYPJQZSiUJ0O3VQ",
    title: "استاندارد",
    type: "vector",
    thumbnail: "/images/map-styles/standard.webp",
    provider: "Mapbox",
    providerLogo: "/images/providers-logo/mapbox.svg"
  }
]

export default tileServersConfig