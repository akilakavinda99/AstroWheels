// AppContext.js

import React, {useState} from 'react';

export const AppContext = React.createContext({
  user: null,
  setUser: user => {},
  planet: null,
  setPlanet: planet => {},
  date: null,
  setDate: date => {},
  spaceShip: null,
  setSpaceShip: spaceShip => {},
});

export const AppProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [planet, setPlanet] = useState(null);
  const [date, setDate] = useState(null);
  const [spaceShip, setSpaceShip] = useState(null);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        planet,
        setPlanet,
        setDate,
        date,
        setSpaceShip,
        spaceShip,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext(AppContext);
