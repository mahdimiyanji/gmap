import { useCallback, useEffect } from "react"
import { IUseKeyPressProps } from "./types"

const useKeyPress = (props: IUseKeyPressProps): void => {
  
  const { keyCodes } = props
  
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    
    for (const keyCode of keyCodes) {
      
      const {
        code,
        handler,
        ctrlKey = false,
        shiftKey = false,
        altKey = false
      } = keyCode
      
      
      if (code.includes(event.code)) {
        if (
          ctrlKey === event.ctrlKey &&
          shiftKey === event.shiftKey &&
          altKey === event.altKey
        )
          handler(event)
      }
    }
  }, [keyCodes])
  
  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress)
    return () => {
      document.removeEventListener("keyup", handleKeyPress)
    }
  }, [keyCodes])
}

export default useKeyPress