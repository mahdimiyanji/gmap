import React from "react"
import useSidebarStore from "./store/useSidebarStore.ts"

const SecondSide = () => {
  
  const items = useSidebarStore(state => state.items)
  const activeItem = useSidebarStore(state => state.activeSidebar)
  
  const activeComponent = items.find(item => item.uuid === activeItem)?.component
  
  if (activeItem) {
    return (
      <div className="w-[350px]">
        {activeComponent && activeComponent}
      </div>
    )
  }
  else return null
}

export default SecondSide