import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  INITIAL_STATE,
  Transaction,
  TransactionTypesSelect,
  useTransaction,
} from "../../contexts/Transaction";
import Box from "../../modules/common/components/Box";
import Button from "../../modules/common/components/Button";
import Card from "../../modules/common/components/Card/Card";
import CardBody from "../../modules/common/components/Card/CardBody";
import CardFooter from "../../modules/common/components/Card/CardFooter";
import CardHeader from "../../modules/common/components/Card/CardHeader";
import Divider from "../../modules/common/components/Divider";
import Fade from "../../modules/common/components/Fade";
import Form from "../../modules/common/components/Form";
import Grid from "../../modules/common/components/Grid";
import Input from "../../modules/common/components/Input";
import Select from "../../modules/common/components/Select";
import Typography from "../../modules/common/components/Typography";
import FormMoney from "../../modules/lotties-components/FormMoney";
import PrefixEnum from "../../utils/Enums/PrefixEnum";
import { BalanceAnimation, BalanceTransaction, MainGrid } from "./styles";
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import pt from "date-fns/locale/pt";
import moment from "moment";
import CurrencyInput from "../../modules/common/components/CurrencyInput";
registerLocale("pt", pt);

interface TransactionFormProps {
  onSubmit(data: any): void;
  Prefix: PrefixEnum;
  Title: string;
}

const TransactionForm: React.FC<TransactionFormProps> = (props) => {
  const { register, handleSubmit } = useForm();


  const {
    state: { transactionEdit },
  } = useTransaction();

  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [show, setShow] = useState(false);

  const onSubmit = (data: any) => {
    const trans: Transaction = {
      description: data.description,
      idTransaction: transaction?.idTransaction!,
      idTransactionType: transaction?.idTransactionType!,
      value: transaction?.value!,
      date: startDate,
    };
    props.onSubmit(trans);
  };

  useEffect(() => {
    if (props.Prefix === PrefixEnum.Edit) {
      setTransaction(transactionEdit);
      setStartDate(moment(transactionEdit?.date).toDate());
    } else {
      setTransaction(INITIAL_STATE);
      setStartDate(new Date());
    }

    setShow(true);
  }, [props.Prefix, transactionEdit]);

  const getDefaultValueSelect = () => {
    return TransactionTypesSelect.find(
      (x) => x.value === transaction?.idTransactionType?.toString() ?? "1"
    );
  };

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransaction((x) => ({
      ...(x ?? INITIAL_STATE),
      value: +e.target.value.replaceAll(",", "").replaceAll("R$", ""),
    }));
  };

  const handleChangeSelect = (e: typeof TransactionTypesSelect[0]) => {
    setTransaction((x) => ({
      ...(x ?? INITIAL_STATE),
      idTransactionType: +e.value,
    }));
  };

  if (!show) return null;
  else
    return (
      <Fade active={true} variant="fade-in">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <MainGrid>
            <BalanceTransaction>
              <Card style={{ marginTop: 25 }}>
                <CardHeader
                  title={
                    <Typography variant="h1" gutterBottom>
                      {props.Title}
                    </Typography>
                  }
                />
                <CardBody>
                  <Grid container>
                    <Grid
                      style={{ width: "100%", alignSelf: "center" }}
                      item
                      lg={4}
                      md={4}
                      sm={4}
                    >
                      <Select
                        defaultValue={getDefaultValueSelect}
                        onChange={handleChangeSelect}
                        options={TransactionTypesSelect}
                      />
                    </Grid>
                    <Grid item lg={8} md={8} sm={8}>
                      <Box directionBox="row">
                        <Input
                          style={{ width: "100%" }}
                          ref={register({ required: "Preencha" })}
                          idInput="1"
                          label="Descrição"
                          name="description"
                          type="text"
                          required={true}
                          defaultValue={transaction?.description}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container>
                    <Grid
                      style={{ width: "100%", alignSelf: "center" }}
                      item
                      lg={4}
                      md={4}
                      sm={4}
                    >
                      <Box directionBox="row">
                        <DatePicker
                          dateFormat="dd/MM/yyyy"
                          locale="pt"
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          customInput={
                            <Input
                              style={{ width: "100%" }}
                              label="Data"
                              name="data"
                              type="text"
                              maxLength={10}
                            />
                          }
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={8} md={8} sm={8}>
                      <Box directionBox="row">
                        <CurrencyInput
                          Id="inputValor"
                          name="valor"
                          label="Valor"
                          onChange={handleChangeInputValue}
                          defaultValue={transaction?.value}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                  <Divider />
                </CardBody>
                <CardFooter style={{ display: "flow-root" }}>
                  <Button style={{ float: "right" }} type="submit">
                    {props.Prefix === PrefixEnum.Edit ? "Atualizar" : "Salvar"}
                  </Button>
                </CardFooter>
              </Card>
            </BalanceTransaction>
            <BalanceAnimation>
              <Box style={{ height: "100%" }}>
                <FormMoney />
              </Box>
            </BalanceAnimation>
          </MainGrid>
        </Form>
      </Fade>
    );
};

export default TransactionForm;
