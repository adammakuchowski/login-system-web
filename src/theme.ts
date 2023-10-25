import createTheme from '@mui/material/styles/createTheme'

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          fontFamily: 'Roboto',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInput-underline:after': {
            borderBottomColor: '#FFFFFF',
          },
          '& .MuiInput-underline:before': {
            borderBottomColor: '#808080',
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: '#FFFFFF',
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
