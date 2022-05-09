import { useState, createContext, useContext } from 'react';

const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {
  const [currentArticle, setCurrentArticle] = useState(null);

  const value = { currentArticle, setCurrentArticle };

  return (
    <AppContext.Provider value={value} >
      {children}
    </AppContext.Provider>
  )
}

