import { getAuth, signOut } from 'firebase/auth';
import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import useFire from '../hooks/useFire';
import './Header.css'


const auth=getAuth(app)
const Header = () => {
    //const {user,handleSignout}=useFire()
    //console.log(user)

    //react firebase hook 'useAuthState'
    const [user, loading, error] = useAuthState(auth);  //user: The auth.User if logged in, or null if not

    //handle signout into logout function
    const logout = () => {
        signOut(auth);
      };

    return (
        <div className='link-style'>
           <nav >
            <Link to='/'>Home</Link>
            <Link to='/products'>Products</Link>
            <Link to='/orders'>Order</Link>
            <Link to='/login'>Review</Link>
            <Link to='/register'>Register</Link>


            <span style={{color:'black',fontWeight:'bold'}}>{user?.displayName}</span>
            {user?.uid 
                ?
                <button onClick={logout}>Sign out</button>
               :
               <Link to='/login'>Login</Link>
            }
            
           </nav>
        </div>
    );
};

export default Header;