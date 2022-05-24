import React from 'react'
import './Login.css'
<<<<<<< HEAD
import farmsimple from './farmsimple.PNG'
=======
import farmsimple from '../../../images/logo.jpg'
>>>>>>> 39f75890a0f86d91af8a4395df7154be002d9e18
import { Link } from 'react-router-dom'
function Forget() {
    return (
            <div className="signin-container">
            <form className="input-section">
<<<<<<< HEAD
                <img src={farmsimple} alt="FarmSimple"></img>
=======
                
            
               
               <div class="logoNameSignin" style={{ color: "rgb(79, 79, 79)" }}>
               <img className="logo" src={farmsimple} width="50" height="50" />
                <b>GFS</b> Trace
               </div>
              
>>>>>>> 39f75890a0f86d91af8a4395df7154be002d9e18
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
