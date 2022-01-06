import React, { FunctionComponent } from "react";
import { Redirect, Route, Switch } from "react-router";
import { defaultQuestionnaireResults, defaultQuestionnaires } from "../App";
import { Questionnaire, User } from "../types/types";
import { Home } from "./home";
import LoginComponent from "./login-component";

const Main: FunctionComponent = () => {
  const [user, setUser] = React.useState<Omit<User, "password"> | undefined>();
  const [questionnaires, setQuestionnaires] = React.useState<Questionnaire[]>(
    defaultQuestionnaires
  );

  const [questionnairesAnswers, setQuestionnairesAnswers] = React.useState<
    { id: string; answers: string[] }[]
  >(defaultQuestionnaireResults);

  return (
    <div>
      <Switch>
        <Route
          path="/signIn"
          exact
          component={() => <LoginComponent setUser={setUser} />}
        />
        <Route
          path="/home"
          component={() => (
            <Home
              setQuestionnairesAnswers={setQuestionnairesAnswers}
              setQuestionnaires={setQuestionnaires}
              questionnaires={questionnaires}
              questionnairesAnswers={questionnairesAnswers}
              user={user}
            />
          )}
        />
        <Redirect to={"/home"} />
      </Switch>
    </div>
  );
};

export default Main;
