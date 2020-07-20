import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'
import * as Styled from '../theme/globalStyles'
import getPlaylists from '../api/api'

const Header = () => {
  const loggedin = window.location.href.indexOf('loggedin') > -1

  if (loggedin) {
    getPlaylists()
  }

  return (
    <HeaderStyled>
      {loggedin ? (
        <LoginButton href="http://localhost:5000/logout">Logout</LoginButton>
      ) : (
        <LoginButton href="http://localhost:5000/login">Login</LoginButton>
      )}
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  ${Styled.flexbox('column', 'center', 'flex-end')}
  padding: 1rem 1rem 4.5rem 1rem;
`

const LoginButton = styled.a`
  padding: 0.5rem;
  border: 1px solid rgba(203, 203, 203, 0.4);
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
`

export default Header
