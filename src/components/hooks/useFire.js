import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.init'

const useFire=()=>{
    const [user,setUser]=useState()
    
    const auth = getAuth(app);
    const providerGoggle = new GoogleAuthProvider();

    const signInWithgoogle=()=>{
        signInWithPopup(auth, providerGoggle)
        .then((result)=>{
            const user = result.user;
            setUser(user)
            //console.log(user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleSignout=()=>{
        signOut(auth)
        .then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }

    useEffect(()=>{
        //onAuthStateChanged used to get the aaccess to state update across other component
        onAuthStateChanged(auth,user=>{
            setUser(user)
        })
    },[auth])


    const logOut=()=>{
        console.log('logged out')
    }

    return {user,signInWithgoogle,logOut,handleSignout}
}

export default useFire