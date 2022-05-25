import React from 'react'
import './Login.css'

import { Link,useNavigate } from 'react-router-dom'
function SignUp() {
    var browserHistory = useNavigate();
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
                <div onClick={()=>browserHistory(-1)}className="btn-cancel">CANCEL</div>
                <div onClick={()=>browserHistory(-1)}className="btn-signup">SIGN UP</div>
            
            </div>
        </div>
    )
}

export default SignUp
