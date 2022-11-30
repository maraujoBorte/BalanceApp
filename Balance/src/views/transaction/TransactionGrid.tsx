import React from "react";
import { TransactionTypes, useTransaction } from "../../contexts/Transaction";
import Box from "../../modules/common/components/Box";
import Button from "../../modules/common/components/Button";
import Card from "../../modules/common/components/Card/Card";
import CardBody from "../../modules/common/components/Card/CardBody";
import CardHeader from "../../modules/common/components/Card/CardHeader";
import Divider from "../../modules/common/components/Divider";
import Fade from "../../modules/common/components/Fade";
import Grid from "../../modules/common/components/Grid";
import AddIcon from "../../modules/common/components/Icons/AddIcon";
import Typography from "../../modules/common/components/Typography";
import moment from "moment";
import EditIcon from "../../modules/common/components/Icons/EditIcon";
import DeleteIcon from "../../modules/common/components/Icons/DeleteIcon";
import { useHistory } from "react-router";
import { useLoading } from "../../contexts/Loading";
import Api from "./service/TransactionService";
import HomeApi from "../home/service/HomeService";
import { notification } from "../../modules/common/components/Notification";

const TransactionGrid: React.FC = () => {
  const { state, dispatch: setTransaction } = useTransaction();
  const history = useHistory();
  const { dispatch } = useLoading();

  const onDelete = async (id: number) => {
    dispatch({ type: "SET_LOADING", payload: { show: true } });
    await Api.deleteTransaction(id);
    await fechApi();
    notification("Transação deletada!!");
  };

  const fechApi = async () => {
    const balance = await HomeApi.getBalanceTransaction();
    setTransaction({ type: "SET_State", payload: { state: balance.data } });
  };

  return (
    <Fade active={true} variant="fade-in">
      <Card style={{ marginTop: 25 }}>
        <CardHeader
          subheader="Listagem de transações do controle financeiro"
          title={
            <Typography variant="h1" gutterBottom>
              Transações
            </Typography>
          }
        />
        <Button
          onClick={() => history.push("/main/transaction/new")}
          style={{ float: "right", marginRight: "16px" }}
          type="button"
        >
          ADICIONAR
          <AddIcon
            style={{ marginBottom: "5px", marginLeft: "5px" }}
            color="white"
          />
        </Button>
        <CardBody style={{ marginTop: "50px" }}>
          <Grid container>
            <Grid item lg={2} md={2} sm={2}>
              <Box
                style={{ height: "100%" }}
                fullWidth={true}
                displayBox="flex"
                justifyContent="flex-start"
                alignItems="center"
                directionBox="row"
              >
                <Typography variant="h2" gutterBottom>
                  Tipo
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={2} md={2} sm={2}>
              <Box
                style={{ height: "100%" }}
                fullWidth={true}
                displayBox="flex"
                justifyContent="flex-start"
                alignItems="center"
                directionBox="row"
              >
                <Typography variant="h2" gutterBottom>
                  Data
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={3}>
              <Box
                style={{ height: "100%" }}
                fullWidth={true}
                displayBox="flex"
                justifyContent="flex-start"
                alignItems="center"
                directionBox="row"
              >
                <Typography variant="h2" gutterBottom>
                  Descrição
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={3}>
              <Box
                style={{ height: "100%" }}
                fullWidth={true}
                displayBox="flex"
                justifyContent="flex-start"
                alignItems="center"
                directionBox="row"
              >
                <Typography variant="h2" gutterBottom>
                  Valor
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={1} md={1} sm={1}>
              <Box
                style={{ height: "100%" }}
                fullWidth={true}
                displayBox="flex"
                justifyContent="flex-start"
                alignItems="center"
                directionBox="row"
              ></Box>
            </Grid>
            <Grid item lg={1} md={1} sm={1}>
              <Box
                style={{ height: "100%" }}
                fullWidth={true}
                displayBox="flex"
                justifyContent="flex-start"
                alignItems="center"
                directionBox="row"
              ></Box>
            </Grid>
          </Grid>
          <Divider />
          {state?.transactions?.map((x, i) => {
            return (
              <div key={i}>
                <Grid style={{ marginTop: "20px" }} container>
                  <Grid style={{ height: "100%" }} item lg={2} md={2} sm={2}>
                    <Box
                      style={{ height: "100%" }}
                      fullWidth={true}
                      displayBox="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      directionBox="row"
                    >
                      <Typography variant="h4" gutterBottom>
                        {
                          TransactionTypes.find(
                            (f) => f.idTransactionType === x.idTransactionType
                          )?.Description
                        }
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid style={{ height: "100%" }} item lg={2} md={2} sm={2}>
                    <Box
                      style={{ height: "100%" }}
                      fullWidth={true}
                      displayBox="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      directionBox="row"
                    >
                      <Typography variant="h4" gutterBottom>
                        {moment(x.date).format("DD/MM/YYYY")}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid style={{ height: "100%" }} item lg={3} md={3} sm={3}>
                    <Box
                      style={{ height: "100%" }}
                      fullWidth={true}
                      displayBox="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      directionBox="row"
                    >
                      <Typography variant="h4" gutterBottom>
                        {x.description}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid style={{ height: "100%" }} item lg={3} md={3} sm={3}>
                    <Box
                      style={{ height: "100%" }}
                      fullWidth={true}
                      displayBox="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      directionBox="row"
                    >
                      <Typography variant="h4" gutterBottom>
                        R$ {x.value}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid style={{ height: "100%" }} item lg={1} md={1} sm={1}>
                    <Box
                      style={{ height: "100%" }}
                      fullWidth={true}
                      displayBox="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      directionBox="row"
                    >
                      <Button
                        onClick={() =>
                          history.push(
                            `/main/transaction/edit/${x.idTransaction}`
                          )
                        }
                        type="button"
                      >
                        <EditIcon color="white" />
                      </Button>
                    </Box>
                  </Grid>
                  <Grid style={{ height: "100%" }} item lg={1} md={1} sm={1}>
                    <Box
                      style={{ height: "100%" }}
                      fullWidth={true}
                      displayBox="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      directionBox="row"
                    >
                      <Button
                        onClick={() => onDelete(x.idTransaction)}
                        type="button"
                      >
                        <DeleteIcon color="white" />
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
                <Divider />
              </div>
            );
          })}
        </CardBody>
      </Card>
    </Fade>
  );
};

export default TransactionGrid;
