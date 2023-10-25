import {Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import ThemeProvider from '@mui/material/styles/ThemeProvider'

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Layout from './components/shared/layout/Layout'
import theme from './theme'
import store from './app/store'
import './fonts.css'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default App
