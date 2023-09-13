import {Routes, Route} from 'react-router-dom'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import Login from './components/pages/login/Login'
import Home from './components/pages/home/Home'
import Layout from './components/shared/layout/Layout'
import theme from './theme'
import './fonts.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
