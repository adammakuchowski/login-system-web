import LoginForm from '../../../pages/login/login_form/LoginForm'
import {
  LoginContainer,
  LoginBanner,
  LoginFormWrapprt,
  LogoContainer,
  LogoImgWrapper
} from './LoginStyled'

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
