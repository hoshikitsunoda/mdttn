import React from 'react'
import { ThemeProvider } from 'styled-components'

import Layout from './hoc/Layout'
import Header from './components/Header'

import { GlobalStyle } from './theme/globalStyles'
import { theme } from './theme/theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Header />
      </Layout>
    </ThemeProvider>
  )
}

export default App
