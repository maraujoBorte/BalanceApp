import React, { createContext, useEffect, useContext, useReducer } from "react";

interface AuthContextData {
  state: Auth;
  dispatch: React.Dispatch<AuthActionType>;
}

interface Auth {
  signed: boolean;
}

const INITIAL_STATE: Auth = {
  signed: false,
};

type AuthActionType = {
  type: "SET_AUTH";
  payload: { nameProp: string; value: boolean | string | number };
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function reducer(state: Auth, action: AuthActionType) {
  switch (action.type) {
    case "SET_AUTH":
      return {
        ...state,
        [action.payload.nameProp]: action.payload.value,
      };
    default:
      return state;
  }
}

export const AuthProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("authContext") as string) ||
    INITIAL_STATE
  );

  useEffect(() => {
    localStorage.setItem("authContext", JSON.stringify(state));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
