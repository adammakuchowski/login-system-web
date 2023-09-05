import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Home = (): JSX.Element => {
  const [isAuthorize, setIsAuthorize] = useState<boolean>(false)
   const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthorize) {
      navigate('/login')
    }
  }, [isAuthorize])

  return (
    <>
      Home
    </>
  )
}

export default Home
