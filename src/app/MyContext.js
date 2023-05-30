import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const MyContext = createContext();

// Custom hook to access the context
export const useMyContext = () => useContext(MyContext);

// Context provider component
export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState("HEHEHE")


  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  )
};
