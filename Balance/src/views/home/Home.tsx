import React, { useEffect } from "react";
import Box from "../../modules/common/components/Box";
import Card from "../../modules/common/components/Card/Card";
import CardBody from "../../modules/common/components/Card/CardBody";
import CardHeader from "../../modules/common/components/Card/CardHeader";
import Divider from "../..//modules/common/components/Divider";
import Fade from "../../modules/common/components/Fade";
import Grid from "../../modules/common/components/Grid";
import Typography from "../../modules/common/components/Typography";
import {
  BalanceAnimation,
  BalanceArea,
  BalanceQtde,
  BalanceTransaction,
  MainGrid,
} from "./styles";
import MoneyHome from "../../modules/lotties-components/MoneyHome";
import Coin from "../../modules/lotties-components/Coin";
import Graph from "../../modules/lotties-components/Graph";
import Api from "./service/HomeService";
import { useTransaction } from "../../contexts/Transaction";
import moment from "moment";
import CardFooter from "../../modules/common/components/Card/CardFooter";
import Button from "../../modules/common/components/Button";
import Database from "../../modules/common/components/Icons/Database";
import { notification } from "../../modules/common/components/Notification";

const Home: React.FC = () => {
  const { state, dispatch } = useTransaction();

  useEffect(() => {
    async function fechApi() {
      const balance = await Api.getBalanceTransaction();
      dispatch({ type: "SET_State", payload: { state: balance.data } });
    }
    fechApi();
  }, [dispatch]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      process.env.REACT_APP_SQL_COMMAND ?? "QUERY SQL NÃO ENCONTRADA"
    );
    notification("SQL QUERY Copiada para o Clipboard!!");
  };

  return (
    <Fade active={true} variant="fade-in">
      <MainGrid>
        <BalanceArea>
          <Box style={{ height: "100%" }}>
            <Card style={{ margin: 0 }}>
              <CardHeader subheader="Saldo" />
              <CardBody
                style={{
                  paddingBottom: "10px",
                  paddingTop: "0px",
                  height: "64%",
                }}
              >
                <Grid style={{ height: "100%" }} container>
                  <Grid style={{ height: "100%" }} item lg={9} md={9} sm={9}>
                    <Box
                      style={{ height: "100%" }}
                      fullWidth={true}
                      displayBox="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      directionBox="row"
                    >
                      <Typography variant="h1" gutterBottom>
                        R$ {state.balance}
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
                      <Coin />
                    </Box>
                  </Grid>
                </Grid>
              </CardBody>
            </Card>
          </Box>
        </BalanceArea>
        <BalanceQtde>
          <Box style={{ height: "100%" }}>
            <Card style={{ margin: 0 }}>
              <CardHeader subheader="Total de Transações" />
              <CardBody
                style={{
                  paddingBottom: "10px",
                  paddingTop: "0px",
                  height: "64%",
                }}
              >
                <Grid style={{ height: "100%" }} container>
                  <Grid style={{ height: "100%" }} item lg={6} md={6} sm={6}>
                    <Box
                      style={{ height: "100%" }}
                      fullWidth={true}
                      displayBox="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      directionBox="row"
                    >
                      <Typography variant="h1" gutterBottom>
                        {state?.transactions?.length ?? 0}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid style={{ height: "100%" }} item lg={6} md={6} sm={6}>
                    <Box
                      style={{ height: "100%" }}
                      fullWidth={true}
                      displayBox="flex"
                      justifyContent="flex-start"
                      alignItems="center"
                      directionBox="row"
                    >
                      <Graph />
                    </Box>
                  </Grid>
                </Grid>
              </CardBody>
            </Card>
          </Box>
        </BalanceQtde>
        <BalanceAnimation>
          <Box style={{ height: "100%" }}>
            <MoneyHome />
          </Box>
        </BalanceAnimation>
        <BalanceTransaction>
          <Box style={{ height: "100%" }}>
            <Card style={{ margin: 0 }}>
              <CardHeader subheader="Dias com o saldo negativo" />
              <CardBody
                style={{
                  paddingBottom: "10px",
                  paddingTop: "0px",
                  height: "64%",
                }}
              >
                <Grid container>
                  <Grid item lg={6} md={6} sm={6}>
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
                  <Grid item lg={6} md={6} sm={6}>
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
                </Grid>
                <Divider />
                {state?.transactionsNegative?.map((x, i) => {
                  return (
                    <div key={i}>
                      <Grid style={{ marginTop: "20px" }} container>
                        <Grid
                          style={{ height: "100%" }}
                          item
                          lg={6}
                          md={6}
                          sm={6}
                          key={i}
                        >
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
                        <Grid
                          style={{ height: "100%" }}
                          item
                          lg={6}
                          md={6}
                          sm={6}
                        >
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
                      </Grid>
                      <Divider />
                    </div>
                  );
                })}
              </CardBody>
              <CardFooter style={{ height: "25%" }}>
                <Button
                  onClick={() => copyToClipboard()}
                  active={false}
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "#ffff",
                    color: "#3f51b5",
                    border: "1px solid",
                  }}
                  type="button"
                >
                  <Box displayBox="flex">
                    <Box style={{ width: "20%", justifyContent: "center" }}>
                      <Database color="#3f51b5" />
                    </Box>
                    <Box>
                      Copiar SQL saldo final de cada dia (Fluxo de Caixa)
                    </Box>
                  </Box>
                </Button>
              </CardFooter>
            </Card>
          </Box>
        </BalanceTransaction>
      </MainGrid>
    </Fade>
  );
};

export default Home;
