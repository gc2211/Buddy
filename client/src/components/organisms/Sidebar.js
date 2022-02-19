import "styles/sidebar.scss";
import Sticky from "react-sticky-el";
import UserProfile from "./UserProfile";
import Suggestions from "./Suggestions";
import image from "images/collin.png";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "firebase-config";
import React,{useState} from "react";

 

function Sidebar() {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <UserProfile
          username={user?.email}
          iconSize="big"
          image={image}
        />
        <Suggestions />
       </div>
    </Sticky>
  );
}

export default Sidebar;
