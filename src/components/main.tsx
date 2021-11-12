import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router";
import { User } from "../types/types";
import { Home } from "./home";
import LoginComponent from "./login-component";

const Main: FunctionComponent = () => {
  const [user, setUser] = React.useState<Omit<User, "password"> | undefined>();

  return (
    <div>
     
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
