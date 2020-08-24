import styled, { createGlobalStyle } from 'styled-components'
import bgImage from './images/quiz.jpg'

export const GlobalStyle = createGlobalStyle`
html{
  height: 100%;
}

body{
  background-image: url(${bgImage});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
  font-family: 'Catamaran', san-serif;
}
`
export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

> p {
  color: #fff;
}

.score {
  color: #fff;
  font-size: 2rem;
}
`