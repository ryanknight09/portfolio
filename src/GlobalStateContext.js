import React, { useMemo, useState, useContext } from "react";

const GlobalStateContext = React.createContext();

const initialState = {
  blurMainBackground: false,
};

const GlobalProvider = ({ children }) => {
  const [globalState, setGlobalState] = useState(initialState);

  const obj = useMemo(
    () => ({
      globalState,
      setGlobalState,
    }),
    [globalState, setGlobalState]
  );

  return (
    <GlobalStateContext.Provider value={obj}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalContext");
  }
  return context;
};

export { GlobalStateContext, useGlobalContext, GlobalProvider };
