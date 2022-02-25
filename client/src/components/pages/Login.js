/*import { useState } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
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
<img src="/golf.svg" alt="Golf icon" height="100px"/>   
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
         <a href="/register">
         <p>Sign up</p>
         </a> 
      </div>
  );
}
export default Login;*/
import React, { useRef, useState } from "react"
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "context/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { signInWithGoogle } from "firebase-config";

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }
    setLoading(false)
  }
    return (
      <div className="loginContainer">
      <img src="/golf.svg" alt="Golf icon" height="100px"/> 
            <h2 className="text-center mb-4">Log In</h2>
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
            <Button disabled={loading} className="w-100" type="submit">
                          Log In
            </Button>
            <Button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </Button>
          </form>
          <Link to="/forgot-password">Forgot Password?</Link>
            <p>Need an account?</p>              
          <Link to="/register" color="black">Sign Up</Link>
         </div> 
    )
  }
export default Login;
 
  