import React from 'react'
import './Login.css'
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
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Re-enter password" />
            </form>
            <div className="v-card__actions">
                <Link to="/" className="btn-cancel">CANCEL</Link>
                <Link to="/Loggedin" className="btn-signup">SIGN UP</Link>
            </div>
        </div>
    )
}

export default SignUp
