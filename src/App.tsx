import {Routes, Route} from 'react-router-dom'
import Login from './components/pages/login/Login'
import Home from './components/pages/home/Home'
import Layout from './components/shared/layout/Layout'
import './fonts.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  )
}

export default App
