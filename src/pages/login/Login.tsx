import Button from '@mui/material/Button/Button'

import {
  LoginContainer,
  LoginBanner,
  LoginFormWrapprt,
  LogoContainer,
  LogoImgWrapper,
  MediaReferencesWrapper,
  FooterLoginBanner,
  ButtonWrapper,
  ButtonDescription,
} from './LoginStyled'
import CompanyName from './company_name/CompanyName'
import LoginForm from './login_form/LoginForm'
import MediaReferences from './media_references/MediaReferences'

const Login = (): JSX.Element => {
  const buttonStyle = {
    fontSize: '16px',
    padding: '0px 25px',
    height: '55px',
    borderRadius: '25px',
  }

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
        <FooterLoginBanner>
          <ButtonWrapper>
            <ButtonDescription>
              Don't have an account?
            </ButtonDescription>
            <Button
              variant="outlined"
              style={buttonStyle}
            >
              GET STARTED
            </Button>
          </ButtonWrapper>
        </FooterLoginBanner>
      </LoginBanner>
    </LoginContainer >
  )
}

export default Login
