import TextField from '@mui/material/TextField/TextField'
import Button from '@mui/material/Button/Button'

import {
  ButtonActionWrapper,
  RegisterContainer,
  TextFieldWrapper,
} from './RegisterStyled'

const Register = () => {
  return (
    <RegisterContainer>
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
        <TextField
          id="password-input"
          label="Repeat Password"
          variant="standard"
          type="password"
          fullWidth
          required
        />
      </TextFieldWrapper>
      <ButtonActionWrapper>
        <Button variant="outlined">Register</Button>
      </ButtonActionWrapper>
    </RegisterContainer>
  )
}

export default Register

