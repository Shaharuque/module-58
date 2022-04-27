import { getAuth } from 'firebase/auth';
import React from 'react';
//import useFire from '../hooks/useFire';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

import './login.css'


const auth=getAuth(app)
const Login = () => {
    //custon useFire() hook
    // const {user,signInWithgoogle,logOut}=useFire()
    //console.log(user)

    //react firebase hook useSignInWithGoogle
    const [signInWithgoogle, user, loading, error] = useSignInWithGoogle(auth)
    console.log(user) //jokhn e google diye lohin korbo tokhn e user ar value ta peye jabo
    return (
        <div className='login-div'>
            <h1>Please Login</h1>

            <div style={{marginBottom:'10px'}}>
                <button onClick={()=>signInWithgoogle()} style={{borderRadius:'15px',backgroundColor:'blue',color:'white',border:'1px solid blue'}}>Google Sign In</button>
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