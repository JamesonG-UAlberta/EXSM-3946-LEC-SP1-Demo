import '@/styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider, AppBar, Typography, Box, Container } from '@mui/material'

export default function App({ Component, pageProps }) {
  /*
  App serves as the wrapper for all pages.
  ThemeProvider and CssBaseline allow MUI to function properly.
  AppBar, Typography, Box, and Container are MUI components.
  The sx prop is a shorthand for the style prop, allowing CSS to be written in JS syntax.
  Not all MUI components allow the same style props, but most allow sx if the style you want to add isn't supported by props.
  The page component gets injected into the Component prop/component.
  */
  return <>
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Box>
        <AppBar position="static">
          <Typography variant="h3" align="center" component="h1" sx={{paddingY: "1rem"}}>Example App</Typography>
        </AppBar>
      </Box>
      <Container>
        <Component {...pageProps} />
      </Container>
      <Box>
        <Typography variant="body1" align="center" component="p" sx={{paddingY: "0.5rem"}}>Footer</Typography>
      </Box>
    </ThemeProvider>
  </> 
}
