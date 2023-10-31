import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
`

export const LoginBanner = styled.div`
  width: 50%;
  height: 100%;
  background-color: #b1b1b1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`
export const LoginFormWrapprt = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: #666666; */
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: column;
`
export const LogoContainer = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 30px;

  background-color: #f4f4f4;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoImgWrapper = styled.img`
  width: 90%;
  height: 90%;
`

export const MediaReferencesWrapper = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 40px;
`

export const FooterLoginForm = styled.div`
  width: 100%;
  height: 10%;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BasicInformationContainer = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const InfoAndPolicyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const CopyrightWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #acacac;
`

export const CopyrightTextWrapper = styled.p`
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-weight: 200;
`

export const FooterLoginBanner = styled.div`
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-right: 50px;
`

export const ButtonDescription = styled.p`
  font-family: 'Roboto';
`
