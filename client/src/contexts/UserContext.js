import React, { createContext, useReducer, useEffect } from 'react';
import { UserReducer } from '../reducers/UserReducer';

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [user, userDispatch] = useReducer(UserReducer, null);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}
 
export default UserContextProvider;