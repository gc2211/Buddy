import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="components/pages/home"> Home</NavbarLink>
            <NavbarLink to="components/pages/map"> Map</NavbarLink>
            <NavbarLink to="components/pages/inbox"> Inbox</NavbarLink>
			<NavbarLink to="components/pages/profile">Profile</NavbarLink>
			<Logo src="https://i.ibb.co/CsMzDSp/Capture-d-e-cran-2022-02-02-a-10-47-36.png" alt="logo" height="auto" width="auto" />
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="pages/home"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="pages/map"> Map</NavbarLinkExtended>
          <NavbarLinkExtended to="pages/inbox"> Inbox</NavbarLinkExtended>
          <NavbarLinkExtended to="pages/profile"> Profile</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;


export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: blue;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const Logo = styled.img`
  margin: 10px;
  max-width: 60px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`;

