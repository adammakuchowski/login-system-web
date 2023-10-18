import styled from 'styled-components'

export const LoginFormContainer = styled.div`
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
  margin-left: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CompanyNameWrapper = styled.div`
  height: 15%;
  display: flex;
  align-items: end;
  justify-content: flex-start;
`

export const MainDescriptionWrapper = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
`

export const ReferencesWrapper = styled.div`
  height: 10%;
`
