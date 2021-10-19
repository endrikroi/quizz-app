import React from "react";
import { Question } from "../types/types";
import { ScorePage } from "./score-page";
import {
  Input,
  TopMarginedDiv,
  QuestionsDiv, StyledButton,
  Wrapper
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
        <br />
        <body>
          <QuestionsDiv>
            Question {currentQuestion + 1} of {questionList.length}:<br />
            {questionList[currentQuestion].questionsText}
          </QuestionsDiv>
          You selected {currentSelectedAnswer}
          <hr />
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
                      selectedAnswers[currentQuestion] ===
                        answerOption.answerText
                    }
                  />
                  {answerOption.answerText}
                </Wrapper>
              </React.Fragment>
            ))}
            <TopMarginedDiv />
            <StyledButton
              onClick={handlePreviousClick}
              disabled={questionList[currentQuestion] === questionList[0]}
            >
              PREVIOUS
            </StyledButton>

            <StyledButton
              onClick={handleConfirmClick}
              disabled={!currentSelectedAnswer || isQuestionAnswered}
            >
              CONFIRM
            </StyledButton>

            <StyledButton
              onClick={handleNextClick}
              disabled={
                currentQuestion > questionList.length - 1 ||
                selectedAnswers.length <= currentQuestion
              }
            >
              NEXT
            </StyledButton>
          </div>
        </body>
      </div>
    </div>
  );
};

export default QuestionnaireAnswers;
