// this context is used to manage the authentication state of the user and the type of user

import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null); // 'vet' or 'owner'

  const login = async (credentials, type) => {
    try {
      // TODO: Implement actual authentication
      setUser({ id: '1', name: 'Test User' });
      setUserType(type);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ user, userType, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext); 