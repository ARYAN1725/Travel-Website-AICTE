import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className="loginWrapper">
        <div className="loginForm">
            <form action="">
            <h2>SIGNUP</h2>
            <div className="formElements">
            <label htmlFor="email" name="email" id="email" className="inputLabel">📧 Email: </label>
            <input type="text" name="email" id="email" className="inputBar"/>

            <label htmlFor="password" id="password" name="password" className="inputLabel">🔒 Password:</label>
            <input type="password" name="password" id="password" className="inputBar"/>

            <label htmlFor="confirmPassword" id="confirmPassword" name="confirmPassword" className="inputLabel">🔒 Confirm Password:</label>
            <input type="confirmPassword" name="confirmPassword" id="confirmPassword" className="inputBar"/>

            <button className="submitButton">SUBMIT</button>
            </div>

            <div className="forgot-Signup">
                <a href="">Forgot Password?</a>
                <a href="/login">Already have an account?Login </a>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Signup