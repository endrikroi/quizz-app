import React from "react";
import { BrowserRouter } from "react-router-dom";
import { v4 } from "uuid";
import "./App.css";
import Main from "./components/main";
import { Questionnaire, QuestionnaireResult } from "./types/types";

const geographyQuestionnaire: Questionnaire = {
  id: v4(),
  questions: [
    {
      questionText: "What is the biggest continent",
      answerOptions: [
        {
          answerText: "Asia",
          isCorrect: true,
        },
        { answerText: "America", isCorrect: false },
        { answerText: "Europe", isCorrect: false },
      ],
    },
    {
      questionText: "What is the biggest country",
      answerOptions: [
        {
          answerText: "Russia",
          isCorrect: true,
        },
        { answerText: "Albania", isCorrect: false },
        { answerText: "China", isCorrect: false },
      ],
    },
  ],
  title: "Geography questionnaire",
};

const waterbedsQuestionnaire: Questionnaire = {
  id: v4(),
  title: "Waterbed questionnaire",
  questions: [
    {
      questionText: "What is the deepest lake in Balkan",
      answerOptions: [
        { answerText: "Ohrid", isCorrect: true },
        { answerText: "Prespa", isCorrect: false },
      ],
    },
  ],
};
export const defaultQuestionnaires: Questionnaire[] = [
  geographyQuestionnaire,
  waterbedsQuestionnaire,
];
export const defaultQuestionnaireResults: QuestionnaireResult[] = [
  {
    id: waterbedsQuestionnaire.id,
    answers: [waterbedsQuestionnaire.questions[0].answerOptions[0].answerText],
  },
];

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
};

export default App;
