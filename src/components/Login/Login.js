import React from 'react';
import useFirebase from '../../hooks/useFirebase'

import './login.css'

const Login = () => {
    const [user,signInwithGoogle]=useFirebase()
    // console.log(user,signInwithGoogle)
    return (
        <div className='login-div'>
            <h1>Please Login</h1>

            <div style={{marginBottom:'10px'}}>
                <button onClick={signInwithGoogle} style={{borderRadius:'15px',backgroundColor:'blue',color:'white',border:'1px solid blue'}}>Google Sign In</button>
            </div>
            
            <form>
                <input type='text' placeholder='Email'/>
                <br/>
                <input type='password' placeholder='Password' />
                <br/>
                <input type='submit' value='Login'  />
            </form>
        </div>
    );
};

export default Login;