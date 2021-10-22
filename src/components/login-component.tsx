import React, { FunctionComponent } from "react";
import { User } from "../types/types";
import LoginForm from "./login-form";

const adminUser = {
  email: "admin@admin.com",
  password: "password",
};

interface LoginComponentProps {
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

const LoginComponent: FunctionComponent<LoginComponentProps> = ({
  setUser,
}) => {
  const [error, setError] = React.useState("");

  const login = (details: User) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
        password: details.password,
      });
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
