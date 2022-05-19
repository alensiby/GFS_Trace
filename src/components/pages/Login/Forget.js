import React from 'react'
import './Login.css'
import farmsimple from './farmsimple.PNG'
import { Link } from 'react-router-dom'
function Forget() {
    return (
            <div className="signin-container">
            <form className="input-section">
                <img src={farmsimple} alt="FarmSimple"></img>
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
