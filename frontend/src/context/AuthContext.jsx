import React, { createContext, useState, useEffect  } from 'react'; 

// Here I create the context for authentication
const AuthContext = createContext();

// This AuthProvider component is wrap the part of the app that needs to the authentication state
const AuthProvider = ({ children }) => {
  // Here I created the state that holds the user, initaly is is null
  const [user, setUser] = useState(() => {
    // Load user from localStorage if available
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    // This will save the user to localStorage
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    // Here I provide the user and setUser to the rest of the app
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };