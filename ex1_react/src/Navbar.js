import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const NavbarItem = styled.li`
  margin: 0;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  display: block;

  &:hover {
    background-color: #555;
  }
`;

function Navbar() {
   return (
        <NavbarContainer>
            <NavbarList>
                <NavbarItem>
                    <NavbarLink to="/Home">Home</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/About">Sobre</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/App">Aula 1</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/App2">Aula 2</NavbarLink>
                </NavbarItem>
                <NavbarItem>
                    <NavbarLink to="/App3">Aula 3</NavbarLink>
                </NavbarItem>
            </NavbarList>
        </NavbarContainer>
    );
}

export default Navbar;