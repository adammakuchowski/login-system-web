import styled from 'styled-components'

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
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

  background: rgb(51,51,51);
  background: linear-gradient(90deg, rgba(51,51,51,1) 0%, rgba(102,102,102,1) 100%);
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
