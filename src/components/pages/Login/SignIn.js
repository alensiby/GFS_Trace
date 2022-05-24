import React from 'react'
import './Login.css'
import farmsimple from './farmsimple.PNG'
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';


function SignIn() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const mail="jesty@gmail.com";
    const pass="jesty";
    let attempts=3;
    let history= useNavigate();
    const submitfun=()=>{
        if (email===mail && password===pass) {
            window.location.href="/Farms"
        }
        else if(attempts>=0){
            
            attempts=attempts-1;
            alert("invalid user, "+attempts+" attempts left")
        }
    }

    // const handleClick=()=>{
    //     window.open("https://grain.croppaco.com/#/");
    // };
    

    return (
        <div>
            {/* <button onClick={handleClick} className="btn-grain">GRAIN CONSOLE</button> */}
        <div className="signin-container">
            <form className="input-section">
                {/* <img src={farmsimple} alt="FarmSimple"></img> */}
                <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                <div className="button-right">
                    <Link to="/Forget" className="forget-button">Forget Password?</Link>
                </div>
            </form>
            <button onClick={submitfun} className="btn-login" ><strong>LOGIN</strong></button>
            <div className="act-style">Don't have an account?<Link to="/SignUp" className="forget-button">SIGN UP</Link></div>
        </div>
        </div>
    )
}

export default SignIn
