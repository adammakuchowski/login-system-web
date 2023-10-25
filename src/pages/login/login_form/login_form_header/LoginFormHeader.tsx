import {
  HeaderContainer,
  DescriptionWrapper,
  NameWrapper,
} from './LoginFormHeaderStyled'

const LoginFormHeader = () => {
  return (
    <HeaderContainer>
      <NameWrapper>
        Sign in to Football
      </NameWrapper>
      <DescriptionWrapper>
        Enter your details below
      </DescriptionWrapper>
    </HeaderContainer>
  )
}

export default LoginFormHeader
