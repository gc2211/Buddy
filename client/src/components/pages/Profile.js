import React ,{useState} from 'react';
import "styles/myprofile.scss";
import "styles/sidebar.scss";
import image from "images/collin.png";
import UserProfile from "components/organisms/UserProfile";
import {FaLanguage} from 'react-icons/fa';
import {FaCity} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "firebase-config";

 
  
const Profile = ()=> {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
       
return (
<>
       <div id="profile-container">
       <div className='profile-info'>
         <h4>
           Profile  
         </h4>
         <div className='profile-user'>
         <UserProfile
            username={user?.email}
            iconSize="big"
             image={image}
        /> 
        </div>      
         <div className='icon-text'>
            <FaLanguage
          className='language-icon'
        /> 
        <span>English</span>  
          </div> 
        <div className='icon-text'>
        <FaCity
          className='city-icon'
        />
        <span>Miami,FL</span>  
          </div> 
        <div className='social-media'>
          <a href='https://www.instagram.com/' className='icon-circle'>
          <AiFillInstagram
          className='instagram-icon'
        />
          </a>
        </div>  
       </div>
       <form>
         <div className='col'>
         <div  className='form-group'>
           <label>About</label>     
        </div> 
        </div> 
        </form>
       </div>
     </>
  )
}
 export default Profile;

 
		