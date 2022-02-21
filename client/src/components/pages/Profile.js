import React ,{useState} from 'react';
import "styles/myprofile.scss";
import "styles/sidebar.scss";
import {FaLanguage} from 'react-icons/fa';
import {FaCity} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "firebase-config";
import {context} from "context/APIProvider";
import {nanoid} from "nanoid";
import {useContext} from "react";
import UserProfile from "components/organisms/UserProfile";
 
 
  
const Profile =(props) => {

  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
    const APIContext = useContext(context);
  
       
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

        /> 
        </div>      
         <div className='icon-text'>
            <FaLanguage
          className='language-icon'
        /> 
           </div> 
        <div className='icon-text'>
        <FaCity
          className='city-icon'
        />
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
           {APIContext.usersIsFetched
				? <ol>
					{APIContext.usersData.data.map((element) => (
						<li key={nanoid()}>
								<span>
									{`Biography: ${element.biography} - `}
								</span>
						</li>
					))}
				</ol>
				: <p>loading...</p>} 
        </div> 
        </div> 
        </form>
       </div>
     </>
  )
}
 export default Profile;

  