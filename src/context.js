import React, {useContext, useEffect, useReducer} from 'react';
import {CAL, CLEAR, DATA, DEL, LOADING, MINUS, PLUS, SHOW} from './controlType';
import reducer, {initialState} from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async () => {
    dispatch({type: LOADING});
    const response = await fetch(url);
    const data = await response.json();
    dispatch({type: DATA, payload: data});
  };

  const clearItems = () => {
    dispatch({type: CLEAR});
  };

  const plusItem = (id) => {
    dispatch({type: PLUS, payload: id});
  };

  const minusItem = (id) => {
    dispatch({type: MINUS, payload: id});
  };

  const deleteItem = (id) => {
    dispatch({type: DEL, payload: id});
  };

  const showEvent = (id) => {
    dispatch({type: SHOW, payload: id});
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    dispatch({type: CAL});
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{...state, clearItems, plusItem, minusItem, deleteItem, showEvent}}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
