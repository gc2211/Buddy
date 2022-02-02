import H2 from "../atoms/H2"
import React from 'react';
 
function Profile ()  {
    const photo = 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,dpr_3.0,f_auto,g_face:center,h_350,q_auto,w_280/headshots_50525.png'
    const userName = 'Collin Morikawa'
    const location = 'New York, USA'

    const buddies = [
      {
        photo: 'http://res.cloudinary.com/usopen/image/upload/v1560204000/us-open/players/2019-players/Jon-Rahm.jpg',
        userName: 'Jon Rahm'
        },
	  {
        photo: 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,dpr_3.0,f_auto,g_face:center,h_350,q_auto,w_280/headshots_35891.png',
        userName: 'Cam Smith'
       },
	  {
        photo: 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,dpr_3.0,f_auto,g_face:center,h_350,q_auto,w_280/headshots_24502.png',
        userName: 'Adam Scott'
       },
	   {
        photo: 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,dpr_3.0,f_auto,g_face:center,h_350,q_auto,w_280/headshots_01810.png',
        userName: 'Phil Mickelsson'
       },
	  {
        photo: 'https://pga-tour-res.cloudinary.com/image/upload/c_fill,d_headshots_default.png,dpr_3.0,f_auto,g_face:center,h_350,q_auto,w_280/headshots_34046.png',
        userName: 'Jordan Spieth'
       }
    ]
 
 	 	
    return (
      <div style={{ margin: '0 auto', width: '100%' }}>
		<main>
		<H2>Profile</H2>
        <Profile photo={photo} userName={userName} location={location} previousEvents={11} upcomingEvents={3} initialFollowersCount={33} listBuddies={buddies} />
		</main>
	  </div>
    )
  }
 
  export default Profile;