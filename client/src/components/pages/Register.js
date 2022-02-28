import { useState } from "react";
import {
  createUserWithEmailAndPassword,
   onAuthStateChanged,
 } from "firebase/auth";
 import { auth } from "firebase-config";
import { signInWithGoogle } from "firebase-config";

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="loginContainer">
      <div>
        <img src="/golf.svg" alt="Golf icon" height="100px"/>  
        <h2> Register </h2>
        <input
          placeholder="Email..."
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
        />
        <input
          placeholder="Password..."
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
        />
        <button onClick={register}><a href="/login">Create Your Profile</a></button>
      </div>
      <div>
        <h3> Already have an account ?       <a className="login" href="/login" > Login</a></h3>
         </div>
        <button class="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}
export default Register;