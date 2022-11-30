import React, { createContext, useEffect, useContext, useReducer } from "react";

interface TransactionContextData {
  state: BalanceTransaction;
  dispatch: React.Dispatch<TransactionActionType>;
}

interface TransactionType {
  idTransactionType: number;
  Description: string;
}

export const TransactionTypes: Array<TransactionType> = [
  { idTransactionType: 1, Description: "Despesa" },
  { idTransactionType: 2, Description: "Receita" },
];

export const TransactionTypesSelect = [
  { value: "1", label: "Despesa" },
  { value: "2", label: "Receita" },
];

export interface BalanceTransaction {
  balance: number;
  transactionsNegative: Array<Transaction>;
  transactions: Array<Transaction>;
  transactionEdit: Transaction;
}

export interface Transaction {
  idTransaction: number;
  idTransactionType: number;
  date: Date | null;
  description: string;
  value: number;
}

export const INITIAL_STATE: Transaction = {
  idTransaction: 0,
  idTransactionType: 1,
  date: new Date(),
  description: "",
  value: 0,
};

const INITIAL_STATE_BALANCE: BalanceTransaction = {
  balance: 0,
  transactionsNegative: [],
  transactions: [],
  transactionEdit: INITIAL_STATE,
};

type TransactionActionType =
  | {
      type: "SET_Transaction";
      payload: {
        nameProp: string;
        value: boolean | string | number | Transaction;
      };
    }
  | {
      type: "SET_State";
      payload: { state: BalanceTransaction };
    }
  | {
      type: "SET_Init_Edit";
    };

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

function reducer(state: BalanceTransaction, action: TransactionActionType) {
  switch (action.type) {
    case "SET_Transaction":
      return {
        ...state,
        [action.payload.nameProp]: action.payload.value,
      };
    case "SET_State":
      return action.payload.state;
    case "SET_Init_Edit":
      return {
        ...state,
        transactionEdit: INITIAL_STATE,
      };
    default:
      return state;
  }
}

export const TransactionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("TransactionContext") as string) ||
      INITIAL_STATE_BALANCE
  );

  useEffect(() => {
    localStorage.setItem("TransactionContext", JSON.stringify(state));
  }, [state]);

  return (
    <TransactionContext.Provider value={{ state, dispatch }}>
      {children}
    </TransactionContext.Provider>
  );
};

export function useTransaction() {
  const context = useContext(TransactionContext);

  return context;
}
