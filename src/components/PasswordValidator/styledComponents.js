import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #475569;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #434451;
  padding: 20px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  color: white;
  font-weight: bold;
  font-size: 30px;
`
export const Para = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.error ? 'red' : 'white')};
  font-weight: bold;
  font-size: ${props => (props.error ? '10px' : '15px')};
`
export const Input = styled.input`
  background-color: white;
  border: none;
  outline: none;
  padding: 10px;
  width: 80%;
  max-width: 450px;
`
