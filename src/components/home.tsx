import React, { FunctionComponent, useEffect } from "react";
import { useHistory } from "react-router";
import { Questionnaire, User } from "../types/types";
import { QuestionnaireCreator } from "./questionnaire-creator";
import QuestionnaireSelector from "./questionnaire-selector";
import RootRoutes from "./root-routes";
import {
  BackgroundWrapper,
  QuestionnaireDiv,
  StyledBoldDiv,
  Wrapper,
  TopMarginedDiv,
  StyledSmallerFontDiv,
} from "./styles";

export const Home: FunctionComponent<{ user: User | undefined }> = ({
  user,
}) => {
  const [questionnaires, setQuestionnaires] = React.useState<Questionnaire[]>(
    []
  );

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
        <QuestionnaireDiv>
          <StyledBoldDiv>Welcome {user?.name ?? null}</StyledBoldDiv>
          {questionnaires.length > 0 && (
            <Wrapper>
              <div>Select questionnare:</div>
              <QuestionnaireSelector questionnaires={questionnaires} />
            </Wrapper>
          )}
          <div>
            <div>
              <QuestionnaireCreator
                onConfirmCreateQuestionnaire={handleQuestionnaireAdd}
              />
            </div>
          </div>
        </QuestionnaireDiv>
        <TopMarginedDiv />
        <RootRoutes questionnaires={questionnaires} />
      </BackgroundWrapper>
      <TopMarginedDiv />
      <StyledSmallerFontDiv>
        Thank you for choosing our quizz :)
      </StyledSmallerFontDiv>
    </div>
  );
};
