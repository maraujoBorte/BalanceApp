import React from "react";
import { RouteInfo } from "../routes/routes";
import routes from "../routes/routes";
import CustomRoutes from "../routes/CustomRoutes";
import { Redirect, Route, Switch } from "react-router-dom";
import MainContainer from "../modules/main/components/MainContainer";
import PageNotFound from "../views/PageNotFound";

const MainLayout: React.FC = () => {
  function getRoutes(routes: RouteInfo[]) {
    return routes.map((prop, key) => {
      if (prop.layout === "/main") {
        return (
          <CustomRoutes
            exact
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
            signed={prop.signed}
            titleRoute={prop.name}
          />
        );
      } else {
        return null;
      }
    });
  }

  return (
    <Route>
      <MainContainer>
        <Switch>
          {getRoutes(routes)}
          <Redirect push to="/auth/notfound404" />
          <Route component={PageNotFound} path="/auth/notfound404">
            <PageNotFound />
          </Route>
        </Switch>
      </MainContainer>
    </Route>
  );
};

export default MainLayout;
