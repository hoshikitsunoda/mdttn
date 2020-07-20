import React from 'react'

import styled from 'styled-components'

const layout: React.FC = ({ children }) => {
  return <Layout>{children}</Layout>
}

const Layout = styled('div')`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    180deg,
    #576475 0%,
    #bac6d6 43.67%,
    rgba(186, 198, 214, 0) 100%
  );
`

export default layout
