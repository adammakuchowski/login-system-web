import {useState} from 'react'
import {
  LoginContainer,
  LoginContentContainer,
  ButtonModeWrapper,
  LoginForm,
  LoginModeWrapper,
  LoginBanner,
  LoginFormWrapprt,
  BannerWrapper,
  CompanyNameWrapper,
  DescriptionWrapper,
  ReferencesWrapper,
  CompanyName,
} from './LoginStyled'
import SignIn from './sign_in/SignIn'
import Register from './register/Register'
import TextButton from '../../common/buttons/text_button/TextButton'

const Login = (): JSX.Element => {
  const [isSignInButtonActive, setIsSignInButtonActive] = useState<boolean>(true)
  const [isRegisterButtonActive, setIsRegisterButtonActive] = useState<boolean>(false)

  const onButtonClick = (signInActive: boolean, registerActive: boolean) => {
    setIsSignInButtonActive(signInActive)
    setIsRegisterButtonActive(registerActive)
  }

  return (
    <LoginContainer>
      <LoginBanner>
        <BannerWrapper>
          <CompanyNameWrapper>
            <CompanyName>
              S
              <span style={{color: '#FFA500', fontFamily: 'Kalam'}}>O</span>
              CIAL
              <span style={{color: '#808080', fontFamily: 'Kalam'}}>TRENSD</span>
            </CompanyName>
          </CompanyNameWrapper>
          <DescriptionWrapper></DescriptionWrapper>
          <ReferencesWrapper></ReferencesWrapper>
        </BannerWrapper>
      </LoginBanner>
      <LoginFormWrapprt>
        <LoginForm>
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
        </LoginForm>
      </LoginFormWrapprt>
    </LoginContainer >
  )
}

export default Login
