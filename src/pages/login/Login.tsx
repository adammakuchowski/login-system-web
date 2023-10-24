import {
  LoginContainer,
  LoginBanner,
  LoginFormWrapprt,
  LogoContainer,
  LogoImgWrapper,
  CompanyNameWrapper,
  MediaReferencesWrapper,
} from './LoginStyled'
import LoginForm from './login_form/LoginForm'
import MediaReferences from './media_references/MediaReferences'

const Login = (): JSX.Element => {
  return (
    <LoginContainer>
      <LoginFormWrapprt>
        <CompanyNameWrapper>
          Football FX
        </CompanyNameWrapper>
        <LoginForm />
        <MediaReferencesWrapper>
          <MediaReferences />
        </MediaReferencesWrapper>
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
