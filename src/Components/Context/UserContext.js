import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext()

const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const UserContext = ({children}) => {
  const [user , setUser] = useState(null)
  const [loder , setLoder] = useState(false)
// sign up
  const signup=(email , password)=>{
    setLoder(true)
    return createUserWithEmailAndPassword(auth , email , password)
  }
  // sign out
  const logOut=()=>{
    setLoder(true)
    return signOut(auth)
  }
  // log in
  const logIn=(email , password)=>{
    setLoder(true)
    return signInWithEmailAndPassword(auth , email , password)
  }
// login with google
const loginGoogle=()=>{
  return signInWithPopup(auth , provider)
}
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , creatures =>{
      setUser(creatures)
      setLoder(false)
    })
    return ()=>{
      unsubscribe()
  }
  },[])
  
  
  const authInfo = {user,loder ,signup, logOut ,logIn,loginGoogle}
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UserContext;