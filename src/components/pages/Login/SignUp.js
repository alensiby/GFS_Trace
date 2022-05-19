import React from 'react'
import './Login.css'
import farmsimple from './farmsimple.PNG'
import { Link } from 'react-router-dom'
function SignUp() {
    return (
        <div className="signin-container">
            <form className="input-section">
                {/* <img src={farmsimple} alt="FarmSimple"></img> */}
                
                <h2>New Signup</h2>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Company Name" />
                <input type="text" placeholder="Email" />
            </form>
            <div className="v-card__actions">
                <Link to="/" className="btn-cancel">CANCEL</Link>
                <Link to="/Loggedin" className="btn-signup">SIGN UP</Link>
            </div>
        </div>
    )
}

export default SignUp
