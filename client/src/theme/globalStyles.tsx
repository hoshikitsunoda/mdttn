import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito|Ropa+Sans&display=swap');
  html {
    background: linear-gradient(180deg, #576475 0%, #BAC6D6 43.67%, rgba(186, 198, 214, 0) 100%);
  }
  
  html * {
    font-family: 'Nunito', sans-serif;
  }
  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0 auto;
  }
  h1,
  h2,
  h3,
  h4 {
    font-family: 'Ropa Sans', sans-serif;
  }
  img {
    display: block;
  }
  a {
    text-decoration: none;
  }
`

export const flexbox = (
  $direction: string,
  $justify: string,
  $align: string
): string => {
  return `
    display: flex;
    flex-direction: ${$direction};
    justify-content: ${$justify};
    align-items: ${$align};
  `
}
