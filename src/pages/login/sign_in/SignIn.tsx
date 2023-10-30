import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import TextField from '@mui/material/TextField/TextField'
import Button from '@mui/material/Button/Button'

import {
  ButtonActionWrapper,
  SignInContainer,
  TextButtonWrapper,
  TextFieldWrapper,
} from './SignInStyled'
import {
  getLoginUserStatus,
  loginUser,
} from '../../../features/user/userSlice'
import TextButton from '../../../components/common/buttons/text_button/TextButton'

const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginUserStatus = useSelector(getLoginUserStatus)

  useEffect(() => {
    if (loginUserStatus !== 'succeeded') return

    navigate('/')
  }, [loginUserStatus])

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleEmailChange = (event: any) => setEmail(event.target.value)
  const handlePasswordChange = (event: any) => setPassword(event.target.value)

  const handleLoginUser = () => {
    if (loginUserStatus !== 'loading') {
      dispatch<any>(loginUser({email, password}))
    }
  }

  return (
    <SignInContainer>
      <TextFieldWrapper>
        <TextField
          id="email-input"
          label="Email"
          variant='outlined'
          type='email'
          fullWidth
          required
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          id="password-input"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </TextFieldWrapper>
      <TextButtonWrapper>
        <TextButton text='Forgot password?' />
      </TextButtonWrapper>
      <ButtonActionWrapper>
        <Button
          variant="outlined"
          onClick={handleLoginUser}
          style={{fontSize: '16px', padding: '20px 60px'}}
        >
          SIGN IN
        </Button>
        <Button
          variant="outlined"
          onClick={handleLoginUser}
          style={{fontSize: '16px', padding: '20px 60px'}}
        >
          SIGN UP
        </Button>
      </ButtonActionWrapper>
    </SignInContainer>
  )
}

export default SignIn
