/*import React from "react";
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
export default Login;*/

import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import buddytpng from "images/buddyt.png";
import { auth } from "firebase-config";
function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
   
  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  return (
    <div className="loginContainer">
     <img src={buddytpng} alt="logo-buddy" height="150"/>
        <h3> Login </h3>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
        />
         <button onClick={login}> Login</button>
      </div>
  );
}
export default Login;