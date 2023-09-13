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
  },
})

export default theme
