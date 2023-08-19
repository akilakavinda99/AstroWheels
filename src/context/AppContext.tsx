// AppContext.js

import React, {useState} from 'react';

export const AppContext = React.createContext({
  user: null,
  setUser: channel => {},
});

export const AppProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AppContext.Provider value={{user, setUser}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
