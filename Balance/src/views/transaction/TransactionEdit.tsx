import React, { useEffect, useState } from "react";
import TransactionForm from "./TransactionForm";
import { useHistory, useParams } from "react-router-dom";
import Api from "./service/TransactionService";
import { Transaction, useTransaction } from "../../contexts/Transaction";
import PrefixEnum from "../../utils/Enums/PrefixEnum";
import { useLoading } from "../../contexts/Loading";
import { notification } from "../../modules/common/components/Notification";
import HomeApi from "../home/service/HomeService";

const TransactionEdit: React.FC = () => {
  const { id } = useParams<any>();
  const { dispatch } = useLoading();
  const history = useHistory();
  const { dispatch: setTransaction } = useTransaction();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function fechApi() {
      const transaction = await Api.getByIdTransaction(id);
      setTransaction({
        type: "SET_Transaction",
        payload: { nameProp: "transactionEdit", value: transaction.data },
      });
      setShowForm(true);
    }
    fechApi();
  }, [id, setTransaction]);

  const onSubmit = async (data: Transaction) => {
    dispatch({ type: "SET_LOADING", payload: { show: true } });
    await Api.updateTransaction(data);
    await fechApi();
    notification("Transação Atualizada!!");
    history.push("/main/transaction");
  };

  const fechApi = async () => {
    const balance = await HomeApi.getBalanceTransaction();
    setTransaction({ type: "SET_State", payload: { state: balance.data } });
  };

  if (showForm)
    return <TransactionForm Title="Editar Transação" Prefix={PrefixEnum.Edit} onSubmit={onSubmit} />;
  else return null;
};

export default TransactionEdit;
