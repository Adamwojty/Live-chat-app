import React, { createContext, useReducer } from "react";

type actionsType = {
  type: string;
  payload: any;
};

enum actionTypes {
  SET_USER = "SET_USER",
}
interface IContextProps {
  user: any;
  dispatch: ({ type, payload }: { type: string; payload: Object }) => void;
}
const initialState = {
  user: null,
};
const setUser = (payload: Object) => {
  return {
    type: actionTypes.SET_USER,
    payload,
  };
};

const store = createContext({} as IContextProps);

const reducer = (state: Object, action: actionsType) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      throw new Error();
  }
};

export const StateProvider = ({ children }: any) => {
  const { Provider } = store;
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};

export { store, actionTypes, setUser };
