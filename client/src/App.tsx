import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from './hoc/Layout'
import Header from './components/Header'
import InnerContainer from './containers/InnerContainer'

import { GlobalStyle } from './theme/globalStyles'
import { theme } from './theme/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header />
        <InnerContainer />
      </Layout>
    </ThemeProvider>
  )
}

export default App
