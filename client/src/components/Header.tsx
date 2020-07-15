import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

import styled from 'styled-components'
import * as Styled from '../theme/globalStyles'

const header: React.FC = () => {
  return (
    <Header>
      <Router>
        <LoginButton to="/">Login</LoginButton>
      </Router>
    </Header>
  )
}

const Header = styled.header`
  ${Styled.flexbox('column', 'center', 'flex-end')}
  padding: 1rem;
`

const LoginButton = styled(Link)`
  padding: 0.5rem;
  border: 1px solid rgba(203, 203, 203, 0.4);
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
`

export default header
