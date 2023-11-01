import createTheme from '@mui/material/styles/createTheme'

const theme = createTheme({
  palette: {
    primary: {
      main: '#151515',
    },
    secondary: {
      main: '#f4f4f4',
    },
    text: {
      primary: '#151515',
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#151515',
          fontFamily: 'Roboto',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:after': {
            borderBottomColor: '#151515',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#151515',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#151515',
          fontFamily: 'Roboto',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          backgroundColor: '#111111',
        },
        bar: {
          backgroundColor: '#555555',
        },
      },
    },
  },
})

export default theme
