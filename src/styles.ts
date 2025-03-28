import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#EEE',
  black: '#111',
  gray: '#333',
  lightGray: '#A3A3A3',
  green: '#10AC84'
}

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, 'sans-serif';
    list-style: none;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${colors.black};
    color: ${colors.white};
    font-size: 1.6rem;
    padding-top: 4rem;
  }

  .centralizer {
    max-width: 102.4rem;
    width: 100%;
    margin: 0 auto;
  }
`

export default GlobalCss
