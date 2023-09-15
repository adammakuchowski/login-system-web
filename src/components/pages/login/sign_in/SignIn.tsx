import TextField from '@mui/material/TextField/TextField'
import Button from '@mui/material/Button/Button'
import {
  ButtonActionWrapper,
  SignInContainer,
  TextFieldWrapper,
} from './SignInStyled'

const SignIn = () => {
  return (
    <SignInContainer>
      <TextFieldWrapper>
        <TextField
          id="email-input"
          label="Email"
          variant='standard'
          type='email'
          fullWidth
          required
        />
        <TextField
          id="password-input"
          label="Password"
          variant="standard"
          type="password"
          fullWidth
          required
        />
      </TextFieldWrapper>
      <ButtonActionWrapper>
        <Button variant="outlined">Sign in</Button>
      </ButtonActionWrapper>
    </SignInContainer>
  )
}

export default SignIn
