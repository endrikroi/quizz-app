import React, { FunctionComponent } from "react";
import { useHistory } from "react-router";
import { User } from "../types/types";
import LoginForm from "./login-form";

const adminUser = {
  name: "Gezim",
  email: "admin@admin.com",
  password: "password",
};

interface LoginComponentProps {
  setUser: React.Dispatch<
    React.SetStateAction<Omit<User, "password"> | undefined>
  >;
}

const LoginComponent: FunctionComponent<LoginComponentProps> = ({
  setUser,
}) => {
  const [error, setError] = React.useState("");

  const history = useHistory();

  const login = (details: { email: string; password: string }) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: adminUser.name,
        email: adminUser.email,
      });
      history.push("/home");
    } else {
      setError("Your details do not match");
    }
  };

  return (
    <div>
      <LoginForm login={login} error={error} />
    </div>
  );
};

export default LoginComponent;
