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
          fontFamily: 'Roboto Mono',
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
          fontFamily: 'Roboto Mono',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Roboto Mono',
        },
      },
    }
  },
})

export default theme
