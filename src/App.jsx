import { ThemeProvider, CssBaseline } from "@mui/material"
import { customTheme } from "./styles/ThemeMui"
import { Router } from "./routes/Router"

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline/>
      <Router/>
    </ThemeProvider>
  )
}

export default App
