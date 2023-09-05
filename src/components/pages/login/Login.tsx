import TextButton from '../../common/buttons/text_button/TextButton'
import {
  ButtonWrapper,
  LoginContainer,
  LoginModeWrapper,
} from './LoginStyled'

const Login = (): JSX.Element => {

  return (
    <LoginContainer>
      <LoginModeWrapper>
        <ButtonWrapper>
          <TextButton text='Sign in' />
        </ButtonWrapper>
        <ButtonWrapper>
          <TextButton text='Register' />
        </ButtonWrapper>
      </LoginModeWrapper>
    </LoginContainer>
  )
}

export default Login
