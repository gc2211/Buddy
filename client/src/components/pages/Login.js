import React from "react";
import buddytpng from "images/buddyt.png";
   
function Login(){
  return (
    
    <div className="loginContainer">
     <img src={buddytpng} alt="logo-buddy" height="150"/>

       <label>Username</label>
      <input
        type=""
      />
      <label className="labellogin">Password</label>
      <input
        type=""
        
      />
       <button className="login-btn" > Login </button>
     </div>
  )
}
export default Login;