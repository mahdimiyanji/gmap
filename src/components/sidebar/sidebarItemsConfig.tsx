import { v4 as uuid } from "uuid"
import { ISidebarItem } from "./store/types.ts"
import BaseMap from "./base-map/BaseMap.tsx"

const sidebarItems: ISidebarItem[] = [
  {
    uuid: uuid(),
    component: <BaseMap />,
    title: "نقشه پایه"
  }
]

export default sidebarItems