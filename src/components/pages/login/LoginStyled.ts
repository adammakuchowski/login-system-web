import styled from 'styled-components'

export const LoginContainer = styled.div`
  border: 1px solid #ffffff;
  width: 35%;
  height: 50%;

  display: flex;
  flex-direction:column;

  /* overflow: hidden; */
`

export const LoginModeWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`

interface ButtonWrapperProps {
  stayActive?: any;
}

export const ButtonModeWrapper = styled.div<ButtonWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  transition: all 0.5s ease-in-out;

  border-bottom: ${({stayActive}: ButtonWrapperProps) => (
    stayActive ?
      '1px solid #ffffff' :
      '1px solid transparent'
  )};

  &:hover {
    border-bottom: 1px solid #ffffff;
  }
`

export const LoginContentContainer = styled.div`
  width: 200%;
  flex: 1;
  display: flex;
  transition: all 1s ease-in-out;

  &.signIn{
    transform: translateX(0);
  }

  &.register{
    transform: translateX(-50%);
  }
`

export const SignInContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: green;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const RegisterContainer = styled.div`
  width: 50%;
  height: 100%;
  background-color: blue;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const TextFieldWrapper = styled.div`
  background-color: red;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 30px;
`

export const ButtonActionWrapper = styled.div`

`

