import {useState} from 'react'
import TextField from '@mui/material/TextField/TextField'
import Button from '@mui/material/Button/Button'
import TextButton from '../../common/buttons/text_button/TextButton'
import {
  LoginContentContainer,
  ButtonModeWrapper,
  LoginContainer,
  LoginModeWrapper,
  SignInContainer,
  RegisterContainer,
  TextFieldWrapper,
  ButtonActionWrapper,
} from './LoginStyled'

const Login = (): JSX.Element => {
  const [isSignInButtonActive, setIsSignInButtonActive] = useState<boolean>(true)
  const [isRegisterButtonActive, setIsRegisterButtonActive] = useState<boolean>(false)

  const onButtonClick = (signInActive: boolean, registerActive: boolean) => {
    setIsSignInButtonActive(signInActive)
    setIsRegisterButtonActive(registerActive)
  }

  // TODO: move SignInContainer and RegisterContainer
  return (
    <LoginContainer>
      <LoginModeWrapper>
        <ButtonModeWrapper stayActive={isSignInButtonActive}>
          <TextButton text='Sign in' buttonAction={() => onButtonClick(true, false)} />
        </ButtonModeWrapper>
        <ButtonModeWrapper stayActive={isRegisterButtonActive}>
          <TextButton text='Register' buttonAction={() => onButtonClick(false, true)} />
        </ButtonModeWrapper>
      </LoginModeWrapper>
      <LoginContentContainer className={isSignInButtonActive ? 'signIn' : 'register'}>
        <SignInContainer>
          <TextFieldWrapper>
            <TextField
              id="email-input"
              label="Email"
              variant="standard"
              fullWidth
              required
            />
            <TextField
              id="password-input"
              label="Password"
              variant="standard"
              type="password"
              fullWidth
              required
            />
          </TextFieldWrapper>
          <ButtonActionWrapper>
            <Button variant="outlined">Primary</Button>
          </ButtonActionWrapper>
        </SignInContainer>
        <RegisterContainer>

        </RegisterContainer>
      </LoginContentContainer>
    </LoginContainer>
  )
}

export default Login
