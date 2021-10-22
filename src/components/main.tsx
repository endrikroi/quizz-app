import React, { FunctionComponent, useEffect } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import { Link } from "react-router-dom";
import { User } from "../types/types";
import { Home } from "./home";
import LoginComponent from "./login-component";
import { RightPositionedDiv, SignInButton } from "./styles";

const Main: FunctionComponent = () => {
  const [user, setUser] = React.useState<User | undefined>();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      history.push("/home");
    }
  }, [history, user]);
  return (
    <div>
      <RightPositionedDiv>
        <Link to="/signIn">
          <SignInButton>Sign in</SignInButton>
        </Link>
      </RightPositionedDiv>
      <Switch>
        <Route
          path="/signIn"
          exact
          component={() => <LoginComponent setUser={setUser} />}
        />
        <Route path="/home" component={() => <Home user={user} />} />
        <Redirect to={"/home"} />
      </Switch>
    </div>
  );
};

export default Main;
