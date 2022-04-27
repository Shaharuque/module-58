import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFire from '../hooks/useFire';


const auth =getAuth(app)
const Home = () => {
    // const { user } = useFire()
    // console.log(user)

    //using react-firebse-hook 'useAuthState'
    const [user]=useAuthState(auth)  //user info will get if user logged in using his google acc

    return (
        <div>
            <h1>This is logged in user home</h1>
            <p>
                Currently logged in user Name:
                <p style={{fontWeight:'bold'}}>
                    {
                        user?.displayName
                    }
                </p>
            </p>
        </div>
    );
};

export default Home;