import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {
  getVerifyTokenStatus,
  verifyToken
} from '../../features/user/userSlice'
import LoadingLine from '../../components/common/loading_line/LoadingLine'
import {
  HomeContainer,
  LoadingLineContainer
} from './HomeStyled'

const Home = (): JSX.Element => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const verifyTokenStatus = useSelector(getVerifyTokenStatus)

  useEffect(() => {
    const sessionToken = sessionStorage.getItem('token')
    console.log('sessionToken', sessionToken)

    if (sessionToken) {
      dispatch<any>(verifyToken(sessionToken)).then((response: any) => {
        if (response.payload !== 200) {
          navigate('/login')
        }
      })
    } else {
      navigate('/login')
    }
  }, [])

  if (verifyTokenStatus !== 'succeeded') {
    return (
      <LoadingLineContainer>
        <LoadingLine />
      </LoadingLineContainer>
    )
  }

  return (
    <HomeContainer>
      Home
    </HomeContainer>
  )
}

export default Home
