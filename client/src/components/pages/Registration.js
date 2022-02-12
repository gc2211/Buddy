import React from "react";
import buddytpng from "images/buddyt.png";
   
function Registration(){
  return (
    
    <div className="registrationContainer">
     <img src={buddytpng} alt="logo-buddy" height="150"/>

       <label>E-mail</label>
      <input
        type=""
      />
       <label>Username</label>
      <input
        type=""
      />
      <label className="labelregistration">Password</label>
      <input
        type=""
        
      />
      <a href="/login">
      <button className="registration-btn"> Register </button>
      </a>
    </div>
  )
}
export default Registration;