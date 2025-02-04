import React from "react"
import SecondSide from "./SecondSide"

const Sidebar = () => {
  return (
    <div className="h-full w-[250px] p-1 flex flex-col gap-2">
      <div className="h-[40px] flex justify-center">
        <img
          src="/images/text-logo.svg"
          className="h-full"
          alt="logo"
        />
      </div>
      
      <SecondSide />
    </div>
  )
}

export default Sidebar