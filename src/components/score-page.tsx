import React from "react";
import { Question } from "../types/types";
import { TopMarginedDiv, QuestionsDiv, StyledBoldDiv, Wrapper } from "./styles";

const findIfCorrect = (answer: string, question: Question) => {
  const selectedAnswerOption = question.answerOptions.find(
    (ao) => ao.answerText === answer
  )!;
  return selectedAnswerOption.isCorrect;
};

export const ScorePage: React.FC<{
  selectedAnswers: string[];
  questions: Question[];
}> = ({ selectedAnswers, questions }) => {
  const answersAndCorrectness = selectedAnswers.map((selectedAnswer, index) => {
    return {
      answer: selectedAnswer,
      isCorrect: findIfCorrect(selectedAnswer, questions[index]),
    };
  });

  const score = answersAndCorrectness.reduce((acc, answerAndCorrectness) => {
    if (answerAndCorrectness.isCorrect) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div>
      <StyledBoldDiv>You have completed this QUIZZ !!!</StyledBoldDiv>
      <TopMarginedDiv />
      <QuestionsDiv>Find below your answers and results:</QuestionsDiv>
      <div>
        {answersAndCorrectness.map((ac) => (
          <Wrapper key={ac.answer}>
            {ac.answer} - {ac.isCorrect ? "Correct" : "Not correct"}
          </Wrapper>
        ))}
      </div>
      <TopMarginedDiv />
      <QuestionsDiv>
        You answered correctly {score} questions out of {questions.length}
      </QuestionsDiv>
    </div>
  );
};