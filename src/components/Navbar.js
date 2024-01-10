import React, { useState } from "react";
import Button from "./Buttons";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useAuth from "../hooks/useAuth";

const NavbarContainer = styled.nav`
  background: linear-gradient(45deg , black, #007bff, grey);
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.textWhite};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 2.5px;
  font-family: ${({ theme }) => theme.fonts.heading};
  &:hover {
    color: ${({ theme }) => theme.colors.heading};
    text-decoration: none;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: 768px) {
    display: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'flex' : 'none')};
    flex-direction: column;
    opacity: 90%;
    position: absolute;
    top: 75px;
    z-index: 999;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

const NavLink = styled.li`
  color: ${({ theme }) => theme.colors.textWhite};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 0 10px;
  
  @media (max-width: 768px) {
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;

  @media (max-width: 768px) {
    display: block; /* Show the hamburger menu icon on mobile */
  }
`;

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <NavbarContainer>
      <Logo to="/dashboard">Fitness Club</Logo>
      <NavLinks isMobileMenuOpen={isMobileMenuOpen}>
        <NavLink onClick={() => { navigate('/dashboard'); toggleMobileMenu(); }}>
          <Button classes="transparent">Dashboard</Button>
        </NavLink>
        {user === null ? (
          <NavLink onClick={() => { navigate('/login'); toggleMobileMenu(); }}>
            <Button classes="transparent">Login</Button>
          </NavLink>
        ) : (
          <NavLink onClick={() => { signOut(); toggleMobileMenu(); }}>
            <Button classes="transparent">Sign Out</Button>
          </NavLink>
        )}
      </NavLinks>
      <HamburgerMenu onClick={toggleMobileMenu}>&#9776;</HamburgerMenu>
    </NavbarContainer>
  );
};

export default Navbar;
