import Button from '@mui/material/Button/Button'
import CopyrightIcon from '@mui/icons-material/Copyright'

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
  FooterLoginForm,
  BasicInformationContainer,
  InfoAndPolicyWrapper,
  CopyrightWrapper,
  CopyrightTextWrapper,
} from './LoginStyled'
import CompanyName from './company_name/CompanyName'
import LoginForm from './login_form/LoginForm'
import MediaReferences from './media_references/MediaReferences'
import TextButton from '../../components/common/buttons/text_button/TextButton'

const Login = (): JSX.Element => {
  const buttonStyle = {
    fontSize: '16px',
    padding: '0px 25px',
    height: '55px',
    borderRadius: '25px',
  }

  // TODO: Move element code to components  
  return (
    <LoginContainer>
      <LoginFormWrapprt>
        <CompanyName />
        <LoginForm />
        <FooterLoginForm>
          <BasicInformationContainer>
            <InfoAndPolicyWrapper>
              <TextButton text='Important information' />
              <TextButton text='Privacy policy' />
            </InfoAndPolicyWrapper>
            <CopyrightWrapper>
              <CopyrightIcon fontSize='small' />
              <CopyrightTextWrapper>
                Copyright 2023 Football FX
              </CopyrightTextWrapper>
            </CopyrightWrapper>
          </BasicInformationContainer>
          <MediaReferencesWrapper>
            <MediaReferences />
          </MediaReferencesWrapper>
        </FooterLoginForm>
      </LoginFormWrapprt>
      <LoginBanner>
        <LogoContainer>
          <LogoImgWrapper src='/images/logo.png' alt='test' />
        </LogoContainer>
        <FooterLoginBanner>
          <ButtonWrapper>
            <ButtonDescription>
              Don't have an account?
            </ButtonDescription>
            <Button
              variant='contained'
              style={buttonStyle}
              color='secondary'
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
