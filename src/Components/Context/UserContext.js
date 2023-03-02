import React, { createContext, useState } from 'react';
const AuthContext = createContext()

const UserContext = ({children}) => {
  const [user , setUser] = useState('Rohit')
  const authInfo = {user}
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UserContext;