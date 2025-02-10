import { v4 as uuid } from "uuid"
import { ISidebarItem } from "./store/types.ts"
import Settings from "./settings/Settings"

const sidebarItems: ISidebarItem[] = [
  {
    uuid: uuid(),
    component: <Settings />,
    title: "تنظیمات"
  }
]

export default sidebarItems