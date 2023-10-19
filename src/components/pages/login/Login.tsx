import {
  LoginContainer,
  LoginBanner,
  BannerWrapper,
  CompanyNameWrapper,
  MainDescriptionWrapper,
  ReferencesWrapper,
  LoginFormWrapprt,
} from './LoginStyled'
import CompanyName from './company_name/CompanyName'
import MainDescription from './main_description/MainDescription'
import HomeReferences from './home_references/HomeReferences'
import LoginForm from './login_form/LoginForm'

const Login = (): JSX.Element => {
  return (
    <LoginContainer>
      <LoginBanner>
        <BannerWrapper>
          <CompanyNameWrapper>
            <CompanyName />
          </CompanyNameWrapper>
          <MainDescriptionWrapper>
            <MainDescription />
          </MainDescriptionWrapper>
          <ReferencesWrapper>
            <HomeReferences />
          </ReferencesWrapper>
        </BannerWrapper>
      </LoginBanner>
      <LoginFormWrapprt>
        <LoginForm />
      </LoginFormWrapprt>
    </LoginContainer >
  )
}

export default Login
