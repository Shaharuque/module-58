import { getAuth } from 'firebase/auth';
import React from 'react';
//import useFire from '../hooks/useFire';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

import './login.css'


const auth=getAuth(app)


//Implement Auth Redirect

const Login = () => {
    //custon useFire() hook
    // const {user,signInWithgoogle,logOut}=useFire()
    //console.log(user)

    //react firebase hook useSignInWithGoogle
    const [signInWithgoogle, user, loading, error] = useSignInWithGoogle(auth)
    console.log(user) //jokhn e google diye lohin korbo tokhn e user ar value ta peye jabo


    ///Implement Auth Redirect(private route ar moddhey porsey amn kono page a click korley jodi user signin kora na thakey tahley user k signin korar jnno signin page show korabey and user signIn ar sathey sathey jei private page a previously user click korey silo shei page render/show hobey loggedin user ar jnno)
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn=()=>{
        signInWithgoogle()
        .then(()=>{            //google diye signIn successful hobar por .then ar kaj
            navigate(from,{ replace: true })
        })
    }

    return (
        <div className='login-div'>
            <h1>Please Login</h1>

            <div style={{marginBottom:'10px'}}>
                <button onClick={()=>handleGoogleSignIn()} style={{borderRadius:'15px',backgroundColor:'blue',color:'white',border:'1px solid blue'}}>Google Sign In</button>
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