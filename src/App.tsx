import "./styles.css"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import rtlPlugin from "stylis-plugin-rtl"
import Layout from "./layout/Layout.tsx"
import MuiThemeProvider from "./MuiThemeProvider.tsx"

const directionCache = createCache({
  key: "rtl",
  stylisPlugins: [rtlPlugin]
})

const App = () => {
  return (
    <CacheProvider value={directionCache}>
      <MuiThemeProvider>
        <Layout />
      </MuiThemeProvider>
    </CacheProvider>
  )
}

export default App