import React, { createContext, useContext, useReducer } from "react";

interface LoadingContextData {
  state: Loading;
  dispatch: React.Dispatch<LoadingActionType>;
}

interface Loading {
  show: boolean;
}

const INITIAL_STATE: Loading = {
  show: false,
};

type LoadingActionType = {
  type: "SET_LOADING";
  payload: { show: boolean };
};

const LoadingContext = createContext<LoadingContextData>(
  {} as LoadingContextData
);

function reducer(state: Loading, action: LoadingActionType) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        show: action.payload.show,
      };
    default:
      return state;
  }
}

export const LoadingProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <LoadingContext.Provider value={{ state, dispatch }}>
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  const context = useContext(LoadingContext);

  return context;
}
