import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";

import Token from "../../helpers/token.helper";

import Register from "../../components/register/Register";
import Login from "../../components/login/Login";
import Feed from "../../components/feed/Feed";

const Routes = (): JSX.Element => {
  const history: any = useHistory();

  const [loggedin, setLoggedin] = useState(false);

  const authToken: string | null = Token.getAuthToken();

  const beforeAuth: string[] = ["login", "register"];

  useEffect(() => {
    if (authToken && !loggedin) {
      setLoggedin(true);
      history.push("/feed");
    }

    if (!authToken && loggedin) {
      setLoggedin(false);
      history.push("/login");
    }
  }, [authToken, loggedin]);

  return (
    <>
      {!loggedin ? (
        <>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
        </>
      ) : (
        <>
          <Route exact path="/" component={Feed}></Route>
          <Route exact path="/feed" component={Feed}></Route>
        </>
      )}
    </>
  );
};

export default Routes;
