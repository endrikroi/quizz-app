import React, { FunctionComponent } from "react";
import {
  BottomMarginedDiv,
  Label,
  LabelMarginedDiv,
  LoginWrapper,
  StyledInput,
  TopMarginedDiv,
} from "./styles";

interface LoginFormProps {
  login: (detail: { email: string; password: string }) => void;
  error: string;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({ login, error }) => {
  const [details, setDetails] = React.useState({
    email: "",
    password: "",
  });

  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    login(details);
  };

  return (
    <>
      <TopMarginedDiv />
      <LoginWrapper>
        <form onSubmit={submitHandler}>
          <div>
            <h2>Login</h2>
          </div>
          {error !== "" ? <div>{error}</div> : null}
          <div>
            <Label>Email </Label>
            <StyledInput
              type="email"
              name="email"
              id="email"
              onChange={(e) =>
                setDetails({ ...details, email: e.target.value })
              }
              value={details.email}
            />
          </div>
          <LabelMarginedDiv>
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
          </LabelMarginedDiv>
          <LabelMarginedDiv>
            <input type="submit" value="Login" />
          </LabelMarginedDiv>
        </form>
        <BottomMarginedDiv />
      </LoginWrapper>
    </>
  );
};

export default LoginForm;
