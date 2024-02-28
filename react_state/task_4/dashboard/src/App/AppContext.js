import React, { createContext, useState, useContext } from 'react';

const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const defaultLogOut = () => {};

const AppContext = createContext({
  user: defaultUser,
  logIn: () => {},
  logOut: () => {},
});

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  const logIn = (email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  };

  const logOut = () => {
    setUser(defaultUser);
  };

  return (
    <AppContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

export default AppContext;
