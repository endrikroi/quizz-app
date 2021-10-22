import React from "react";
import { Question } from "../types/types";
import { ScorePage } from "./score-page";
import {
  Input,
  StyledButton,
  StyledSmallerFontDiv,
  TopMarginedDiv,
  Wrapper,
} from "./styles";

const QuestionnaireAnswers: React.FunctionComponent<{
  questionList: Question[];
}> = ({ questionList }) => {
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const [selectedAnswers, setSelectedAnswers] = React.useState<string[]>([]);

  const [currentSelectedAnswer, setCurrentSelectedAnswer] = React.useState<
    string | undefined
  >();

  const handleChange: React.ChangeEventHandler<any> = (e) => {
    setCurrentSelectedAnswer(e.target.value);
  };

  const handleConfirmClick = () => {
    if (currentSelectedAnswer) {
      setSelectedAnswers([...selectedAnswers, currentSelectedAnswer]);
    }
  };

  const handleNextClick = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questionList.length) {
      setCurrentQuestion(nextQuestion);
      setCurrentSelectedAnswer(undefined);
    }
  };

  const handlePreviousClick = () => {
    const previousQuestion = currentQuestion - 1;
    setCurrentQuestion(previousQuestion);
  };

  const quizzCompleted = selectedAnswers.length === questionList.length;

  if (quizzCompleted) {
    return (
      <ScorePage selectedAnswers={selectedAnswers} questions={questionList} />
    );
  }

  const isQuestionAnswered = selectedAnswers.length >= currentQuestion + 1;

  return (
    <div>
      <div>
        <StyledSmallerFontDiv>
          Question {currentQuestion + 1} of {questionList.length}
          <TopMarginedDiv>
            {questionList[currentQuestion].questionsText}
          </TopMarginedDiv>
        </StyledSmallerFontDiv>
        <TopMarginedDiv />
        <div onChange={handleChange}>
          {questionList[currentQuestion].answerOptions.map((answerOption) => (
            <React.Fragment key={answerOption.answerText}>
              <Wrapper>
                <Input
                  type="radio"
                  value={answerOption.answerText}
                  name={"quizz"}
                  disabled={isQuestionAnswered}
                  checked={
                    currentSelectedAnswer === answerOption.answerText ||
                    selectedAnswers[currentQuestion] === answerOption.answerText
                  }
                />
                {answerOption.answerText}
              </Wrapper>
            </React.Fragment>
          ))}
          <TopMarginedDiv />
          <Wrapper>
            <StyledButton
              onClick={handlePreviousClick}
              disabled={questionList[currentQuestion] === questionList[0]}
            >
              Previous
            </StyledButton>

            <StyledButton
              onClick={handleConfirmClick}
              disabled={!currentSelectedAnswer || isQuestionAnswered}
            >
              Confirm
            </StyledButton>

            <StyledButton
              onClick={handleNextClick}
              disabled={
                currentQuestion > questionList.length - 1 ||
                selectedAnswers.length <= currentQuestion
              }
            >
              Next
            </StyledButton>
          </Wrapper>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireAnswers;
