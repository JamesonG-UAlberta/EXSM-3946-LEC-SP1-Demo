import '@/styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider, AppBar, Typography, Box, Container } from '@mui/material'

export default function App({ Component, pageProps }) {
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
