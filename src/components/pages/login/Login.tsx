import {
  LoginContainer,
  LoginBanner,
  LoginFormWrapprt,
  LogoContainer,
  LogoImgWrapper,
} from './LoginStyled'
import LoginForm from './login_form/LoginForm'

const Login = (): JSX.Element => {
  return (
    <LoginContainer>
      <LoginFormWrapprt>
        <LoginForm />
      </LoginFormWrapprt>
      <LoginBanner>
        <LogoContainer>
          <LogoImgWrapper src='/images/logo.png' alt="test" />
        </LogoContainer>
        
      </LoginBanner>
    </LoginContainer >
  )
}

export default Login
