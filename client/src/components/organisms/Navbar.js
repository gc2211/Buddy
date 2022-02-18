import React, { useState } from "react";
import styled from "styled-components";
import {onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "firebase-config";
import { Link } from "react-router-dom";
import {BiWorld} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
import {BsCalendarWeek} from "react-icons/bs"

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/home">  
            <AiOutlineHome
          className='home-icon'
        />
        </NavbarLink>
            <NavbarLink to="/map"> 
            <BiWorld
         className='map-icon'
       />
       </NavbarLink>
            <NavbarLink to="/event">
              <BsCalendarWeek
         className='events-icon'
       />
       </NavbarLink>
			      <NavbarLink to="/profile">
              <CgProfile
         className='profile-icon'
       />
       </NavbarLink>
			      <NavbarLink to="/logout">
              <AiOutlineLogout
         className='logout-icon'onClick={logout}
       />
       </NavbarLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <NavbarLink>
        <h4>{user?.email}</h4>
        </NavbarLink>
        <RightContainer>
         <a href="/home"> 
        <Logo src="https://i.ibb.co/1spqpB3/buddy.png" alt="logo" height="auto" width="auto" />
        </a>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/home"> Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/map"> Map</NavbarLinkExtended>
          <NavbarLinkExtended to="/event"> Event</NavbarLinkExtended>
          <NavbarLinkExtended to="/profile"> Profile</NavbarLinkExtended>
          <NavbarLinkExtended to="/login"> Logout</NavbarLinkExtended>
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
 