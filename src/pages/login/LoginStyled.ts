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
`

export const FooterLoginBanner = styled.div`
  width: 100%;
  height: 10%;
  position: absolute;
  bottom: 0;

  background-color: red;
  display: flex;

  justify-content: flex-end;
  align-items: center;
`

export const ButtonWrapper = styled.div`
  background-color: gold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-right: 50px;
`

export const ButtonDescription = styled.p`
  font-family: 'Roboto';
`
