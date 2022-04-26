import { useEffect, useState } from "react";
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState("shaik");

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
       const user=result.user
       setUser(user)
       console.log(user)
      })
      .catch((error) => {
       console.log(error)
      });
  };

  //vid tey dekhano hoisey object hisabey return kortesey but amr seita kaj hocchey na
  return [user, signInWithGoogle];
};

export default useFirebase;
