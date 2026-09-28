// src/contexts/AuthContext.jsx

import {
  createContext,
  useEffect,
  useState,
} from "react";


export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const savedUser =
      localStorage.getItem("lc_user");

    const savedToken =
      localStorage.getItem("lc_token");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

    if (savedToken) {
      setToken(savedToken);
    }
  }, []);

  const login = (
    userData,
    userToken
  ) => {
    setUser(userData);
    setToken(userToken);

    localStorage.setItem(
      "lc_user",
      JSON.stringify(userData)
    );

    localStorage.setItem(
      "lc_token",
      userToken
    );
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("lc_user");
    localStorage.removeItem("lc_token");
  };

  const isAuthenticated =
    !!user && !!token;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;