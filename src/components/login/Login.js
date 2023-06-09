import React from "react"
import {useState} from "react"
import { loginUser } from "../../utils";
import '../login/Login.css';

const Login = ({ newUser }) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(username)
        console.log(password)
        await loginUser(username, password, newUser)
    }
    
    return (
      <div className="login-container">
        <>
        <h1>Log in to your account</h1>

        <form onSubmit={submitHandler} className="formLogin">
        <label>Username:
            <input onChange={(e) => setUsername(e.target.value)}></input>
        </label>
        
        <label>Password:
            <input onChange={(e) => setPassword(e.target.value)} type="password"></input>
        </label>

        <button type="submit" className="userLoginButton">LOGIN</button>
        </form>
        </>
      </div>
    );
  }
  
  export default Login;
