import React, { useEffect, useRef, useState } from "react"
import Dialog from "@mui/material/Dialog"
import { TextField } from "@mui/material"
import { useKeyPress } from "@core/hooks/useKeyPress"
import useMapStore from "@/components/map/store/useMapStore.ts"
import { createHash } from "@/components/hidden-features/utils.ts"

const HiddenFeatures = () => {
  
  const [showModal, setShowModal] = useState(false)
  const [inputValue, setInputValue] = useState("")
  
  const dblShiftPress = useRef<number>(0)
  
  const setShowHiddenFeatures = useMapStore(state => state.setShowHiddenFeatures)
  
  useKeyPress({
    keyCodes: [
      {
        code: ["Enter", "NumpadEnter"],
        handler: () => {
          if (showModal) {
            try {
              const hash = createHash(inputValue)
              if (hash === 7996119634521271) {
                setShowHiddenFeatures(true)
                setInputValue("")
                setShowModal(false)
              }
              
            }
            catch { /* empty */ }
          }
        }
      }
    ]
    
  })
  
  useEffect(() => {
    document.addEventListener("keydown", dblShiftHandler)
    
    return () => {
      document.removeEventListener("keydown", dblShiftHandler)
    }
  }, [])
  
  const dblShiftHandler = ev => {
    if (dblShiftPress.current != 0 && ev.shiftKey) {
      dblShiftPress.current = 0
      setShowModal(true)
      setInputValue("")
    }
    else {
      dblShiftPress.current = 1
      setTimeout(() => dblShiftPress.current = 0, 300)
    }
  }
  
  
  return (
    <Dialog open={showModal} onClose={() => setShowModal(false)} fullWidth>
      <TextField
        dir="ltr"
        type="password"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        fullWidth
      />
    </Dialog>
  )
}

export default HiddenFeatures