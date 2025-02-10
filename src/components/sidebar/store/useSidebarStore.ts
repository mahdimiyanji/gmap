import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import { ISidebarStore } from "./types.ts"
import sidebarItems from "../sidebarItemsConfig.tsx"

const useSidebarStore = create(immer<ISidebarStore>((set, get) => ({
  items: sidebarItems,
  activeSidebar: null,
  
  setActiveItem: itemUuid => {
    set({ activeSidebar: itemUuid })
  }
})))

export default useSidebarStore