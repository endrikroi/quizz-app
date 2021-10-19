import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { QuestionnaireCreator } from "./components/questionnaire-creator";
import QuestionnaireSelector from "./components/questionnaire-selector";
import RootRoutes from "./components/root-routes";
import {
  TopMarginedDiv,
  StyledBoldDiv,
  StyledSmallerFontDiv,
  BackgroundWrapper,
  QuestionnaireDiv,
} from "./components/styles";
import { Questionnaire } from "./types/types";
const App = () => {
  const [questionnaires, setQuestionnaires] = React.useState<Questionnaire[]>(
    []
  );

  const handleQuestionnaireAdd = (questionnaire: Questionnaire) => {
    setQuestionnaires((prev) => [...prev, questionnaire]);
  };
  // console.log(laptop);
  return (
    <BrowserRouter>
      <BackgroundWrapper>
        <QuestionnaireDiv>
          <StyledBoldDiv>Welcome to our Quizz</StyledBoldDiv>
          {questionnaires.length > 0 && (
            <div>
              <div>Go to questionnares</div>
              <QuestionnaireSelector questionnaires={questionnaires} />
            </div>
          )}
          <div>
            {/* <QuestionnaireAnswers questionList={questionList} /> */}
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
      <TopMarginedDiv />
      <StyledSmallerFontDiv>
        Thank you for choosing our quizz :)
      </StyledSmallerFontDiv>
    </BrowserRouter>
  );
};

export default App;
