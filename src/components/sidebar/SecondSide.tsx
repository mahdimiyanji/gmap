import React from "react"
import CloseIcon from "@mui/icons-material/Close"
import IconButton from "@mui/material/IconButton"
import useSidebarStore from "./store/useSidebarStore.ts"

const SecondSide = () => {
  
  const items = useSidebarStore(state => state.items)
  const activeItem = useSidebarStore(state => state.activeSidebar)
  const setActiveItem = useSidebarStore(state => state.setActiveItem)
  
  const activeComponent = items.find(item => item.uuid === activeItem)?.component
  
  const closeHandler = () => {
    setActiveItem(null)
  }
  
  if (activeItem) {
    return (
      <div className="w-[350px] relative">
        <div className="absolute left-0 top-0 p-0.5">
          <IconButton onClick={closeHandler} size="small">
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>

        {activeComponent && activeComponent}
      </div>
    )
  }
  else return null
}

export default SecondSide