import React, { useState } from "react";
import Button from "./Buttons";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { NavbarContainer, Logo, NavLinks, NavLink, HamburgerMenu } from "../styled/Navigation.style";

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
      <NavLinks $isMobileMenuOpen={isMobileMenuOpen}>
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
