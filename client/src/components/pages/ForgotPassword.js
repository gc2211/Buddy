import React, { useRef, useState } from "react"
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "context/AuthContext"
import { Link } from "react-router-dom"
function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }
    setLoading(false)
  }
  return (
      
    <div className="loginContainer">
    <img src="/golf.svg" alt="Golf icon" height="100px"/> 
      <h2 className="text-center mb-4">Password Reset</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
          <form onSubmit={handleSubmit}>
          <label id="email">
            E-mail    
        <input type="email" ref={emailRef} required />
          </label>
          <Button disabled={loading} className="w-100" type="submit">
            Reset Password
          </Button>
        </form>            
         <div className="w-100 text-center mt-3">
        <Link to="/login">Login</Link>
      </div>
  <div className="w-100 text-center mt-2">
    Need an account? 
  </div> 
  <div>
  <Link to="/signup">Sign Up</Link>
  </div>
  </div>
   )
}

export default ForgotPassword;


