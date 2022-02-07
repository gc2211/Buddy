import React,{ useState , useContext}  from 'react';
import {context} from "../../context/APIProvider";
import "styles/myprofile.scss";
import {nanoid} from "nanoid";
import Section from "../molecules/Section";
import image from "images/collin.png";
import UserProfile from "components/organisms/UserProfile";
import {FaLanguage, FaUserEdit} from 'react-icons/fa';
import {FaCity} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
 
  
  const Profile = (props)=> {
    const APIContext = useContext(context);
    const [profile, setProfile] = useState({
      id: null,
      value: ''
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
            username="Collin Morikawa"
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
           <label>Biography</label>     
        </div> 
        </div> 
        <br/> 
        <br/>     
        <br/>     
       <div className='upevents'>
       <h3>Upcoming events</h3>
       </div>
       <div className='pastevents'>
       <h3>Pasts events</h3>
       </div>
       </form>
       </div>
     </>
  )
}
 export default Profile;

 
		