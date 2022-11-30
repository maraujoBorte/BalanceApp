import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../modules/common/components/Button";
import Fade from "../modules/common/components/Fade";
import Grid from "../modules/common/components/Grid";
import Player404 from "../modules/lotties-components/Player404";

const PageNotFound: React.FC = () => {
  const history = useHistory();

  return (
    <Grid container>
      <Fade active={true} variant="fade-in">
        <Grid item lg={12} md={12} sm={12}>
          <Player404 />
        </Grid>
        <Grid item lg={12} md={12} sm={12}>
          <Button onClick={()=> history.push("/auth/login")} style={{ width: "100%", height: "42px" }}>
            Voltar para tela de login
          </Button>
        </Grid>
      </Fade>
    </Grid>
  );
};

export default PageNotFound;
