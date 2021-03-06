import React from 'react'

import styled from 'styled-components'

const innerContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>
}

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  border: 1px solid rgba(203, 203, 203, 0.4);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.07);
  height: 81vh;
`

export default innerContainer
