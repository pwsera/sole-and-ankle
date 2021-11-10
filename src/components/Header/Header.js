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

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
