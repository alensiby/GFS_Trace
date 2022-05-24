import React from 'react'
import './Login.css'
<<<<<<< HEAD
import farmsimple from './farmsimple.PNG'
=======
>>>>>>> 39f75890a0f86d91af8a4395df7154be002d9e18
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
<<<<<<< HEAD
=======
                <input type="text" placeholder="Password" />
                <input type="text" placeholder="Re-enter password" />
>>>>>>> 39f75890a0f86d91af8a4395df7154be002d9e18
            </form>
            <div className="v-card__actions">
                <Link to="/" className="btn-cancel">CANCEL</Link>
                <Link to="/Loggedin" className="btn-signup">SIGN UP</Link>
            </div>
        </div>
    )
}

export default SignUp
