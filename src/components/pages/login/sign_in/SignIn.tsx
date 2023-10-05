import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import TextField from '@mui/material/TextField/TextField'
import Button from '@mui/material/Button/Button'

import {
  ButtonActionWrapper,
  SignInContainer,
  TextFieldWrapper,
} from './SignInStyled'
import {
  getLoginUserStatus,
  loginUser,
} from '../../../../features/user/userSlice'

const SignIn = () => {
  const dispatch = useDispatch()
  const loginUserStatus = useSelector(getLoginUserStatus)

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
          variant='standard'
          type='email'
          fullWidth
          required
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          id="password-input"
          label="Password"
          variant="standard"
          type="password"
          fullWidth
          required
          value={password}
          onChange={handlePasswordChange}
        />
      </TextFieldWrapper>
      <ButtonActionWrapper>
        <Button variant="outlined" onClick={handleLoginUser}>Sign in</Button>
      </ButtonActionWrapper>
    </SignInContainer>
  )
}

export default SignIn
