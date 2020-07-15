import { createGlobalStyle } from 'styled-components'

import { WindowSize, Theme } from '../models/theme'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito|Ropa+Sans&display=swap');
  html {
    background-color: #ffffff;
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

const size: WindowSize = {
  mobile: '350px',
  laptop: '1024px',
}

export const theme: Theme = {
  colors: {
    text: '#fff',
    secondaryText: 'rgba(15, 15, 15, 0.8)',
  },
  device: {
    mobile: `(min-width: ${size.mobile})`,
    laptop: `(min-width: ${size.laptop})`,
  },
}

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

export default GlobalStyle
