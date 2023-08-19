// AppContext.js

import React, {useState} from 'react';

export const AppContext = React.createContext({
  user: null,
  setUser: user => {},
  planet: null,
  setPlanet: planet => {},
});

export const AppProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [planet, setPlanet] = useState(null);

  return (
    <AppContext.Provider value={{user, setUser, planet, setPlanet}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
