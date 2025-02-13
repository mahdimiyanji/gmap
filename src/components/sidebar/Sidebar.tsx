import React from "react"
import Divider from "@mui/material/Divider"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import useSidebarStore from "./store/useSidebarStore.ts"
import SettingsIcon from "../../@core/icons/SettingsIcon.tsx"

const Sidebar = () => {
  
  const items = useSidebarStore(state => state.items)
  const setActiveItem = useSidebarStore(state => state.setActiveItem)
  
  const handleClick = (itemId: string) => {
    setActiveItem(itemId)
  }
  
  return (
    <div className="h-full w-[200px] p-1 flex flex-col gap-2 relative">
      <div className="h-[40px] flex justify-center gap-1 items-end">
        <img
          src="/images/logo/text-logo.svg"
          width="80"
          alt="Gmap"
        />

        <img
          src="/images/logo/logo.svg"
          width="36"
          height="36"
          alt="Gmap"
        />
      </div>
      
      <Divider />
      
      <List>
        {
          items.map(item => (
            <ListItem disablePadding key={item.uuid}>
              <ListItemButton onClick={() => handleClick(item.uuid)}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>

                <ListItemText className="text-right" primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}

export default Sidebar