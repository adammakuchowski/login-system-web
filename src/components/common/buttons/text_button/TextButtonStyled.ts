import styled from 'styled-components'

export const TextButtonContainer = styled.button`
  font-family: 'Roboto';
  border: none;
  padding: 0;
  background: none;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  font-weight: 500;
  text-shadow:0px 1px 0px #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    color: red;
  }
`

export const TextWrapper = styled.div`
  transition: all 0.4s ease;
`
