/*import { useState } from "react";
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
export default Register;*/

import React, { useRef, useState } from "react"
import {  Button , Alert} from "react-bootstrap"
import { useAuth } from "context/AuthContext"
import { Link, useHistory } from "react-router-dom"
function Register() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  async function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }
    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }
    setLoading(false)
  }
  return (
     
    <div className="loginContainer">
    <img src="/golf.svg" alt="Golf icon" height="100px"/> 
    <h2 className="text-center mb-4">Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
         <form onSubmit={handleSubmit}>
                <label id="email">
                  E-mail    
              <input type="email" ref={emailRef} required />
                </label>
                <label id="password">
              Password
              <input type="password" ref={passwordRef} required />
                </label>
                <label id="password-confirm">
                Password Confirmation          
                <input type="password" ref={passwordConfirmRef} required />
                </label>
                </form>   
                <Button disabled={loading} className="w-100" type="submit">
                  Sign Up
                </Button>
    <div className="w-100 text-center mt-2">
    Already an account? <Link to="/login">Login</Link>
    </div> 
    </div>
   )
}

export default Register;

 