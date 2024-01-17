import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background: linear-gradient(45deg , black, #007bff, grey);
  padding: ${({ theme }) => theme.spacing.sm};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled(Link)`
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

export const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: 768px) {
    display: ${({ $isMobileMenuOpen }) => ($isMobileMenuOpen ? 'flex' : 'none')};
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

export const NavLink = styled.li`
  color: ${({ theme }) => theme.colors.textWhite};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 0 10px;
  
  @media (max-width: 768px) {
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;

  @media (max-width: 768px) {
    display: block; /* Show the hamburger menu icon on mobile */
  }
`;