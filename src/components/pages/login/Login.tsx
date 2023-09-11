import {useState} from 'react'
import TextButton from '../../common/buttons/text_button/TextButton'
import {
  ButtonWrapper,
  LoginContainer,
  LoginModeWrapper,
} from './LoginStyled'

const Login = (): JSX.Element => {
  const [isSignInButtonActive, setIsSignInButtonActive] = useState<boolean>()
  const [isRegisterButtonActive, setIsRegisterButtonActive] = useState<boolean>()

  const onButtonClick = (signInActive: boolean, registerActive: boolean) => {
    setIsSignInButtonActive(signInActive)
    setIsRegisterButtonActive(registerActive)
  }

  return (
    <LoginContainer>
      <LoginModeWrapper>
        <ButtonWrapper stayActive={isSignInButtonActive}>
          <TextButton text='Sign in' buttonAction={() => onButtonClick(true, false)}/>
        </ButtonWrapper>
        <ButtonWrapper stayActive={isRegisterButtonActive}>
          <TextButton text='Register' buttonAction={() => onButtonClick(false, true)}/> 
        </ButtonWrapper>
      </LoginModeWrapper>
    </LoginContainer>
  )
}

export default Login
