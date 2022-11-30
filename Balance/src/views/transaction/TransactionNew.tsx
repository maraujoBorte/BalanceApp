import React from "react";
import PrefixEnum from "../../utils/Enums/PrefixEnum";
import TransactionForm from "./TransactionForm";
import Api from "./service/TransactionService";
import { Transaction, useTransaction } from "../../contexts/Transaction";
import { useLoading } from "../../contexts/Loading";
import { notification } from "../../modules/common/components/Notification";
import { useHistory } from "react-router";
import HomeApi from "../home/service/HomeService";

const TransactionNew: React.FC = () => {
  const { dispatch } = useLoading();
  const history = useHistory();
  const { dispatch: setTransaction } = useTransaction();

  const onSubmit = async (data: Transaction) => {
    dispatch({ type: "SET_LOADING", payload: { show: true } });
    await Api.insertTransaction(data);
    await fechApi();
    notification("Transação Inserida!!");
    history.push("/main/transaction");
  };

  const fechApi = async () => {
    const balance = await HomeApi.getBalanceTransaction();
    setTransaction({ type: "SET_State", payload: { state: balance.data } });
  };

  return (
    <>
      <TransactionForm
        Title="Nova Transação"
        Prefix={PrefixEnum.New}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default TransactionNew;
