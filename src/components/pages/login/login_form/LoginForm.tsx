import {useState} from 'react'

import TextButton from '../../../common/buttons/text_button/TextButton'
import Register from '../register/Register'
import SignIn from '../sign_in/SignIn'
import {
  LoginFormContainer,
  ButtonModeWrapper,
  LoginContentContainer,
  LoginModeWrapper,
} from './LoginFormStyled'

const LoginForm = () => {
  const [isSignInButtonActive, setIsSignInButtonActive] = useState<boolean>(true)
  const [isRegisterButtonActive, setIsRegisterButtonActive] = useState<boolean>(false)

  const onButtonClick = (signInActive: boolean, registerActive: boolean) => {
    setIsSignInButtonActive(signInActive)
    setIsRegisterButtonActive(registerActive)
  }

  return (
    <LoginFormContainer>
      <LoginModeWrapper>
        <ButtonModeWrapper stayActive={isSignInButtonActive}>
          <TextButton text='Sign in' buttonAction={() => onButtonClick(true, false)} />
        </ButtonModeWrapper>
        <ButtonModeWrapper stayActive={isRegisterButtonActive}>
          <TextButton text='Register' buttonAction={() => onButtonClick(false, true)} />
        </ButtonModeWrapper>
      </LoginModeWrapper>
      <LoginContentContainer className={isSignInButtonActive ? 'signIn' : 'register'}>
        <SignIn />
        <Register />
      </LoginContentContainer>
    </LoginFormContainer>
  )
}

export default LoginForm
