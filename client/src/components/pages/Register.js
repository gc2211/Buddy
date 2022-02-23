/*import React from "react";
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
export default Registration;*/

import { useState } from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "firebase-config";

function Register() {  
  const [registerEmail, setRegisterEmail] = useState(""); 
  const [registerPassword, setRegisterPassword] = useState("");  
  const register = async () => {    
    try {      
      const user = await createUserWithEmailAndPassword(       
       auth,        
       registerEmail,
       registerPassword      
       );      
       console.log(user);    } catch (error) {      
         console.log(error.message);    }  };
return (    
<div className="loginContainer">      
<img src="/golf.svg" alt="Golf icon" height="100px"/>   
<h3> Create your profile</h3>        
   <input placeholder="Username..."/> 
   <input placeholder="Email..." onChange={(event) => {            
     setRegisterEmail(event.target.value);          }}/>       
      <input placeholder="Password..." onChange={(event) => {            
        setRegisterPassword(event.target.value);}}/>
         <button onClick={register}> Register</button> 
         <a href="/login">
         <p>Already have an account ?</p>
         </a> 
    </div> 
 )
}
export default Register;

 