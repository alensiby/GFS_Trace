import React from 'react'
import './Login.css'
import farmsimple from '../../../images/logo.jpg'
import { Link } from 'react-router-dom'
function Forget() {
    return (
            <div className="signin-container">
            <form className="input-section">
                
            
               
               <div class="logoNameSignin" style={{ color: "rgb(79, 79, 79)" }}>
               <img className="logo" src={farmsimple} width="50" height="50" />
                <b>GFS</b> Trace
               </div>
              
                <h3>Enter your email to request a password reset</h3>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="New Password" />
                <input type="text" placeholder="Confirm Password" />
            </form>
            <div className="v-card__actions">
                <Link to="/" className="btn-cancel">BACK</Link>
                <Link to="/"><button className="btn-signup">RESET</button></Link>
            </div>
        </div>
    )
}

export default Forget
