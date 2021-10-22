import React, { FunctionComponent } from "react";
import { User } from "../types/types";
import { FormRow, Label, StyledInput, Wrapper } from "./styles";

interface LoginFormProps {
  login: (detail: User) => void;
  error: string;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({ login, error }) => {
  const [details, setDetails] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    login(details);
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <h2>Login</h2>
        {error !== "" ? <div>{error}</div> : ""}
        <FormRow>
          <Label>Name </Label>
          <StyledInput
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </FormRow>
        <FormRow>
          <Label>Email </Label>
          <StyledInput
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </FormRow>
        <FormRow>
          <Label>Password </Label>
          <StyledInput
            type="password"
            name="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </FormRow>
        <input type="submit" value="Login" />
      </form>
    </Wrapper>
  );
};

export default LoginForm;
