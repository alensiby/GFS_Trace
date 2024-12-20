import React from "react";
import "./Login.css";
import farmsimple from "../../../images/logo.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const mail = "jesty@gmail.com";
  const pass = "jesty";
  let attempts = 3;
  let history = useNavigate();
  const resetfun = () => {
    window.location.href = "/Forget";
  };
  const signupfun=()=>{
    window.location.href='/Signup'
  }
  const submitfun = () => {
    if (email === mail && password === pass) {
      window.location.href = "/Farms";
    } else if (attempts >= 0) {
      attempts = attempts - 1;
      alert("invalid user, " + attempts + " attempts left");
    }
  };

  // const handleClick=()=>{
  //     window.open("https://grain.croppaco.com/#/");
  // };

  return (
    <div>
      {/* <button onClick={handleClick} className="btn-grain">GRAIN CONSOLE</button> */}
      <div className="signin-container">
        <form className="input-section">
          <div>
            <div class="logoNameSignin" style={{ color: "rgb(79, 79, 79)" }}>
              <img className="logo" src={farmsimple} width="50" height="50" />
              <b>GFS</b> Trace
            </div>
          </div>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="button-right">
            <div className="forget-button" onClick={resetfun}>
              Forgot Password?
            </div>
          </div>
        </form>
        <button onClick={submitfun} className="btn-login">
          <strong>LOGIN</strong>
        </button>
        <div className="act-style">
          Don't have an account?<div onClick={signupfun}className="forget-button">SIGN UP</div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
