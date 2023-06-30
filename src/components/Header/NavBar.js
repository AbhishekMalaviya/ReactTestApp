import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
const NavBar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
          <MenuLink to="/contact" activeStyle>
            Contact Us
          </MenuLink>
          <MenuLink to="/chat" activeStyle>
            Chat
          </MenuLink>
          <MenuLink to="/counter" activeStyle>
            Counter
          </MenuLink>
          <MenuLink to="/redux" activeStyle>
            Redux
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default NavBar;

