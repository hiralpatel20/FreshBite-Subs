import React, { createContext, useState } from 'react';

// Here I create the context for authentication
const AuthContext = createContext();

// This AuthProvider component is wrap the part of the app that needs to the authentication state
const AuthProvider = ({ children }) => {
  // Here I create the state t hold the current user, as of now I set it to the null
  const [user, setUser] = useState(null);

  return (
    // Here I provide the user and setUser to the rest of the app
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };