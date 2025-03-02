import { ReactElement } from "react"

export type ISidebarStore = ISidebarState & ISidebarActions

export type ISidebarItem = {
  uuid: string
  title: string
  component: ReactElement
  icon: ReactElement
}

type ISidebarState = {
  items: ISidebarItem[]
  activeSidebar: string | null
}

type ISidebarActions = {
  setActiveItem: (itemUuid: string) => void
}