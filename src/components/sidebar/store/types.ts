import { ReactElement } from "react"

export type ISidebarStore = ISidebarState & ISidebarActions

export type ISidebarItem = {
  uuid: string
  title: string
  component: ReactElement
  icon: ReactElement
  isHiddenFeature: boolean
}

type ISidebarState = {
  items: ISidebarItem[]
  activeSidebar: string | null
}

type ISidebarActions = {
  setActiveItem: (itemUuid: ISidebarState["activeSidebar"]) => void
}