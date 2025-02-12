import React from "react"
import ProjectionSwitch from "./ProjectionSwitch.tsx"
import StyleSelection from "./StyleSelection.tsx"

const BaseMap = () => {
  
  
  return (
    <div className="p-1.5">
      <ProjectionSwitch />
      
      <StyleSelection />
    </div>
  )
}

export default BaseMap