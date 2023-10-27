
import SignIn from '../sign_in/SignIn'
import {LoginFormContainer} from './LoginFormStyled'
import LoginFormHeader from './login_form_header/LoginFormHeader'

const LoginForm = () => {

  return (
    <LoginFormContainer>
      <LoginFormHeader />
      <SignIn />
    </LoginFormContainer>
  )
}

export default LoginForm
