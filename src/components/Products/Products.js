import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFire from '../hooks/useFire';


const auth=getAuth(app)

const Products = () => {
    //user info can be accessed here using useFire() hook (custom hook) this works mostly like context api and also prevent props drilling problem
    //const {user}=useFire()

    //using react-firebase-hook 'useAuthState'
    const [user]=useAuthState(auth)
    return (
        <div>
            <h1>Products Info</h1>
            <div>
                {
                    user ? <p style={{color:'red'}}>{user?.email}</p> : 'No user found'
                }
            </div>
        </div>
    );
};

export default Products;