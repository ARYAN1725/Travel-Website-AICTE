import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="loginWrapper">
        <div className="loginForm">
            <form action="">
            <h2>LOGIN</h2>
            <div className="formElements">
            <label htmlFor="email" name="email" id="email" className="inputLabel">📧 Email: </label>
            <input type="text" name="email" id="email" className="inputBar"/>

            <label htmlFor="password" id="password" name="password" className="inputLabel">🔒 Password:</label>
            <input type="password" name="password" id="password" className="inputBar"/>

            <button className="submitButton">SUBMIT</button>
            </div>

            <div className="forgot-Signup">
                <a href="">Forgot Password?</a>
                <a href="/signup">Don't have an account?Sign up </a>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login