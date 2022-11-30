import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global";
import { AuthProvider } from "./contexts/Auth";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthLayout from "./layout/Auth";
import MainLayout from "./layout/Main";
import { TransactionProvider } from "./contexts/Transaction";
import { LoadingStyled } from "./modules/common/components/Loading/styles";
import { LoadingProvider } from "./contexts/Loading";
import Notification from "./modules/common/components/Notification";

ReactDOM.render(
  <React.StrictMode>
    <Notification />
    <LoadingProvider>
      <LoadingStyled />
      <TransactionProvider>
        <AuthProvider>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route path="/main" render={() => <MainLayout />} />
              <Route path="/auth" render={() => <AuthLayout />} />
              <Redirect from="/" to="/auth/login" />
            </Switch>
          </BrowserRouter>
        </AuthProvider>
      </TransactionProvider>
    </LoadingProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
