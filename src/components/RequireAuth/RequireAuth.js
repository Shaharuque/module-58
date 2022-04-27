import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../firebase.init';


const auth=getAuth(app)
const RequireAuth = ({children}) => {
    //react-firebse-hook 'useAuthState' to get the loggedin user info
    const [user]=useAuthState(auth)

    let location = useLocation(); //browser ar kon jaiagae asi sheita

    //jodi user logged in kora na thaakey tahley login page render hobey otherwise return korbey children
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    //children is App.js a routing part ar RequireAuth ar peter vitor ja thakbey sheita render hobey ba access dibey
    return children
};

export default RequireAuth;