import React from 'react';
import "styles/sidebar.scss";
import UserProfile from "components/organisms/UserProfile";
import image from "images/collin.png";


 
function Profile ()  {
     
    return (
      <div className='profilepage'>
		    <h1 align="left">My Profile</h1>
        <br/>
        <br/>
        <UserProfile
          username="Collin Morikawa"
          caption=""
          iconSize="big"
          image={image}
        />
        <main>
        <p align="left">Name:</p> <p align="right">Edit:</p>
        <p align="left">City:</p>
        <p align="left">Biography:</p>
        <br/>        
        <br/>
        <br/>
        <p align="left">Upcoming Events:</p>          
        <p align="right">Past Events:</p>
        <div className='list'>
          <p>Buddies:</p>
         </div> 
        </main>
	    </div>
    )
  }
 
  export default Profile;