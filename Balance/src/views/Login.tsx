import React, { FormEvent, useState } from "react";
import Box from "../modules/common/components/Box";
import Button from "../modules/common/components/Button";
import Card from "../modules/common/components/Card/Card";
import CardBody from "../modules/common/components/Card/CardBody";
import CardHeader from "../modules/common/components/Card/CardHeader";
import Fade from "../modules/common/components/Fade";
import Grid from "../modules/common/components/Grid";
import Input from "../modules/common/components/Input";
import Typography from "../modules/common/components/Typography";
import Form from "../modules/common/components/Form";
import { useAuth } from "../contexts/Auth";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const { dispatch } = useAuth();
  const history = useHistory();

  //implementacao mockada
  const [loginForm, setLoginForm] = useState({
    login: "",
    senha: "",
  });

  function handleOnChangeInput(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  }

  //implementacao mockada
  function handleOnSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loginForm.login === "admin" && loginForm.senha === "admin") {
      dispatch({
        type: "SET_AUTH",
        payload: { nameProp: "signed", value: true },
      });
      ///Seria a home
      history.push("/main/home");
    }
  }

  return (
    <Box>
      <Fade active={true} variant="fade-in">
        <Card border="none" backgroundColor="#f4f6f8">
          <CardHeader
            subheader="Entre com um e-mail cadastrado"
            title={<Typography variant="h1">Login</Typography>}
          />
          <CardBody>
            <Form onSubmit={handleOnSubmit}>
              <Grid item xl={12} md={12} sm={12}>
                <Input
                  onChange={(e) => handleOnChangeInput(e)}
                  inputColor="#f4f6f8"
                  label="Login"
                  name="login"
                />
              </Grid>
              <Grid item xl={12} md={12} sm={12}>
                <Input
                  inputColor="#f4f6f8"
                  label="Senha"
                  type="password"
                  name="senha"
                  onChange={(e) => handleOnChangeInput(e)}
                />
              </Grid>
              <Grid item xl={12} md={12} sm={12}>
                <Button style={{ width: "100%", height: "42px" }}>
                  Entrar
                </Button>
              </Grid>
            </Form>
          </CardBody>
        </Card>
      </Fade>
    </Box>
  );
};

export default Login;
