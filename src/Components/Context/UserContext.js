import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext()

const auth = getAuth(app)

const UserContext = ({children}) => {
  const [user , setUser] = useState('Rohit')

  const signup=(email , password)=>{
    return createUserWithEmailAndPassword(auth , email , password)
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , creatures =>{
      setUser(creatures)
    })
    return unsubscribe();
  },[])
  
  const authInfo = {user ,signup}
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UserContext;