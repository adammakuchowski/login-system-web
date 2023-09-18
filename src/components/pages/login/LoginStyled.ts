import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
  /* background-color: blue; */
`

export const LoginBanner = styled.div`
  width: 70%;
  height: 100%;
  background-color: #333333;
`

export const LoginFormWrapprt = styled.div`
  width: 30%;
  height: 100%;
  background-color: #666666;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 80px;
`

export const LoginForm = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  flex-direction:column;
  overflow: hidden;
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

export const BannerWrapper = styled.div`
  height: 100%;
  /* background-color: red; */
  margin-left: 150px;
`

export const CompanyNameWrapper = styled.div`
  height: 15%;
  display: flex;
  align-items: end;
  justify-content: flex-start;
  /* background-color: blue; */
`

export const DescriptionWrapper = styled.div`
  
`

export const ReferencesWrapper = styled.div`
  
`

export const CompanyName = styled.h1`
  font-family: 'Roboto Mono', monospace;
  display: flex;
  /* background-color: gold; */
`
