import styled from 'styled-components'

export const LoginContainer = styled.div`
  border: 1px solid #ffffff;
  width: 35%;
  height: 50%;
`

export const LoginModeWrapper = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  border-bottom: 1px solid transparent;
  transition: all 0.5s ease-in-out;

  &:hover {
    border-bottom: 1px solid #ffffff;
  }
`
