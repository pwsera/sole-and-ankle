import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  padding: 20px 32px; /* To have a center and baseline alignment. We could use a separeta container, but tha makes things more complicated */

  display: flex;
  align-items: baseline;
  height: 72px;
  margin: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px; /* to avoid auto margin, and "sale" collapsing with logo when the window get small*/
`;

const Side = styled.div`
  flex: 1; /* To perfect center our nav in the middle. Logo has a hypo size of 0px. Side in left and right takes all the space and nav has no other choice unless be positioned in the middle */
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  position: relative;

  &:hover {
    opacity: 0.9;
  }

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-color: ${COLORS.gray[900]};
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }


  &:first-of-type:hover::after,
  &:first-of-type:focus::after{
    background-color: ${COLORS.secondary};
  }

  &:hover::after,
  &:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}
`;

export default Header;
