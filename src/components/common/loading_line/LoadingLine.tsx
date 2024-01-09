import Box from '@mui/material/Box/Box'
import LinearProgress from '@mui/material/LinearProgress/LinearProgress'

const LoadingLine = (): JSX.Element => {
  return (
    <Box sx={{width: '50%'}}>
      <LinearProgress />
    </Box>
  )
}

export default LoadingLine
