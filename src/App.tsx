import "./styles/styles.css"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import rtlPlugin from "stylis-plugin-rtl"
import Main from "./layout/Main"
import MuiThemeProvider from "./configs/MuiThemeProvider"

const directionCache = createCache({
  key: "rtl",
  stylisPlugins: [rtlPlugin]
})

const App = () => {
  return (
    <CacheProvider value={directionCache}>
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    </CacheProvider>
  )
}

export default App