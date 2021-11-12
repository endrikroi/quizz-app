import { Button } from "antd";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { RightPositionedDiv } from "./styles";

interface HeaderComponentProps {
  isLoggedIn: boolean;
}

const HeaderComponent: FunctionComponent<HeaderComponentProps> = ({
  isLoggedIn,
}) => {
  return (
    <RightPositionedDiv>
      {!isLoggedIn && (
        <Link to="/signIn">
          <Button type="primary">Sign in</Button>
        </Link>
      )}
    </RightPositionedDiv>
  );
};

export default HeaderComponent;
