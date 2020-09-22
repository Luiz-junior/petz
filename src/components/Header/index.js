import React from 'react';

import logo from '../../assets/img/logo.png';
import { HeaderContainer } from './styles';

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="logo" />
    </HeaderContainer>
  )
}

export default Header
