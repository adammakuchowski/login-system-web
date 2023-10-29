import {
  LoginContainer,
  LoginBanner,
  LoginFormWrapprt,
  LogoContainer,
  LogoImgWrapper,
  MediaReferencesWrapper,
  ButtonWrapper,
} from './LoginStyled'
import CompanyName from './company_name/CompanyName'
import LoginForm from './login_form/LoginForm'
import MediaReferences from './media_references/MediaReferences'

const Login = (): JSX.Element => {
  return (
    <LoginContainer>
      <LoginFormWrapprt>
        <CompanyName />
        <LoginForm />
        <MediaReferencesWrapper>
          <MediaReferences />
        </MediaReferencesWrapper>
      </LoginFormWrapprt>
      <LoginBanner>
        <LogoContainer>
          <LogoImgWrapper src='/images/logo.png' alt="test" />
        </LogoContainer>
        <ButtonWrapper>

        </ButtonWrapper>
      </LoginBanner>

    </LoginContainer >
  )
}

export default Login
