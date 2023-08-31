import {Routes, Route} from 'react-router-dom'
import Login from './components/pages/login/Login'
import Home from './components/pages/home/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
