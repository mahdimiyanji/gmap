import React, { ReactNode, useMemo } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"

type Props = {
  children: ReactNode
}

const MuiThemeProvider = (props: Props) => {
  
  const isMobile = useMediaQuery("(min-width:320px)")
  const isTablet = useMediaQuery("(min-width:480px)")
  
  const theme = useMemo(() => createTheme({
    typography: {
      fontFamily: [
        "Iransans",
        "Roboto"
      ].join(","),
      button: { fontFamily: "Iransans" }
    },
    spacing: isMobile ? 4 : isTablet ? 6 : 8
  }), [isMobile, isTablet])
  
  return (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider