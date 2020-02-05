import React, { createContext, useReducer, useEffect } from 'react';
import { tokenReducer } from '../reducers/TokenReducer';

export const TokenContext = createContext();

const TokenContextProvider = (props) => {
  const [token, dispatch] = useReducer(tokenReducer, []);

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
  }, [token]);

  return (
    <TokenContext.Provider value={{ token, dispatch }}>
      {props.children}
    </TokenContext.Provider>
  );
}
 
export default TokenContextProvider;