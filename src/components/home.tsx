import React, { FunctionComponent, useEffect } from "react";
import { useHistory } from "react-router";
import { defaultQuestionnaireResults, defaultQuestionnaires } from "../App";
import { AnswerContext } from "../context/answer-context";
import { Questionnaire, User } from "../types/types";
import HeaderComponent from "./header-component";
import QuestionnaireSelector from "./questionnaire-selector";
import RootRoutes from "./root-routes";
import {
  BackgroundWrapper,
  CenteredDiv,
  H1,
  StyledBoldDiv,
  TopMarginedDiv,
} from "./styles";

export const Home: FunctionComponent<{
  user: Omit<User, "password"> | undefined;
}> = ({ user }) => {
  const [questionnaires, setQuestionnaires] = React.useState<Questionnaire[]>(
    defaultQuestionnaires
  );

  const [questionnairesAnswers, setQuestionnairesAnswers] = React.useState<
    { id: string; answers: string[] }[]
  >(defaultQuestionnaireResults);

  const handleQuestionnaireAdd = (questionnaire: Questionnaire) => {
    setQuestionnaires((prev) => [...prev, questionnaire]);
  };

  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/signIn");
    }
  }, [history, user]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <BackgroundWrapper>
        <HeaderComponent isLoggedIn={!!user} />
        <TopMarginedDiv>
          <div>
            <StyledBoldDiv>Welcome {user?.name ?? null}</StyledBoldDiv>
            {questionnaires.length > 0 && (
              <div>
                <H1>Select questionnaire</H1>
                <QuestionnaireSelector questionnaires={questionnaires} />
              </div>
            )}
          </div>
        </TopMarginedDiv>
        <TopMarginedDiv />
        <AnswerContext.Provider
          value={{
            setQuestionnairesAnswers,
            questionnairesAnswers,
          }}
        >
          <RootRoutes
            handleQuestionnaireAdd={handleQuestionnaireAdd}
            questionnaires={questionnaires}
          />
        </AnswerContext.Provider>
        <CenteredDiv>Thank you for choosing our quizz 🙃</CenteredDiv>
      </BackgroundWrapper>
      <TopMarginedDiv />
    </div>
  );
};
