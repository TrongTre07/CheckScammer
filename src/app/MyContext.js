import React, {createContext, useContext, useEffect, useState} from 'react';

// Create the context
const MyContext = createContext();

// Custom hook to access the context
export const useMyContext = () => useContext(MyContext);

// Context provider component
export const MyContextProvider = ({children}) => {
  const [allNumber, setAllNumber] = useState();
  const [userData, setUserData] = useState();
  const [isLogged, setIsLogged] = useState(false);

  return (
    <MyContext.Provider
      value={{allNumber, setAllNumber, isLogged, setIsLogged, userData, setUserData}}>
      {children}
    </MyContext.Provider>
  );
};
