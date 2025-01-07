// src/components/Header.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import GoldenJackpot from './images/GoldenJackpot.jpeg';
import { Link } from 'react-router-dom';


const StyledNavbar = styled(Navbar)`
  background-color: #D22B2B; /* Blush color */
  padding: 20px 20px;
`;

const StyledNavLink = styled(Nav.Link)`
  color: white !important;
  font-weight: bold;
  margin-right: 10px;
  &:hover {
    color: #232931 !important;
  }
`;

const DownloadButton = styled(Nav.Link)`
  background-color: #f5f5f5;
  color: #26272b !important;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: bold;
  &:hover {
    color: #232931 !important;
    background-color: #fff !important;
  }
`;

const Logo = styled.img`
  width: 50px;
  margin-right: 10px;
`;

const Header = () => {
  return (
    <StyledNavbar expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <Logo src={GoldenJackpot} alt="Logoooo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <StyledNavLink href="/">Home</StyledNavLink>
          <StyledNavLink href="#today_results">Today Results</StyledNavLink>
          <StyledNavLink href="#results">Result</StyledNavLink>
          <StyledNavLink href="scheme">Scheme</StyledNavLink>
          <DownloadButton href="download_results">Download Result</DownloadButton>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;
