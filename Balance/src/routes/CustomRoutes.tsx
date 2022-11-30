import React, { useEffect } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import Login from "../views/Login";

interface Props extends RouteProps {
  signed: boolean;
  titleRoute?: string;
}

const CustomRoutes: React.FC<Props> = (props: any) => {
  const { state } = useAuth();

  useEffect(() => {
    document.title = props.titleRoute;
  }, [props]);

  if ((props.signed && !state.signed)) {
    return (
      <>
        <Redirect push to="/auth/login" />
        <Route path="/auth/login">
          <Login />
        </Route>
      </>
    );
  }

  return <Route {...props} />;
};

export default CustomRoutes;
