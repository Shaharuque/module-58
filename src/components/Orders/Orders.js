import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth=getAuth(app)
const Orders = () => {
    const [user]=useAuthState(auth)
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h3>Welcome to Mr. <span style={{color:'teal' ,fontFamily:'sans',fontWeight:'bold'}}>{user?.displayName} </span>Order page</h3>
            <small>This page is protected page if user is not logged in then this will not appear</small>
        </div>
    );
};

export default Orders;