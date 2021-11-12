import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useAnswerContext } from "../context/answer-context";
import { Questionnaire } from "../types/types";
import { ScorePage } from "./score-page";
import { BottomMarginedDiv, H1, Input, StyledButton } from "./styles";

const QuestionnaireAnswers: React.FunctionComponent<{
  questionnaire: Questionnaire;
}> = ({ questionnaire }) => {
  const questionList = questionnaire.questions;

  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const { setQuestionnairesAnswers, questionnairesAnswers } =
    useAnswerContext();

  const questionnaireResult = questionnairesAnswers.find(
    (x) => x.id === questionnaire.id
  );

  const [selectedAnswers, setSelectedAnswers] = React.useState<string[]>(
    questionnaireResult?.answers ?? []
  );

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

  const quizzCompleted =
    selectedAnswers.length === questionList.length || questionnaireResult;

  const history = useHistory();

  useEffect(() => {
    if (quizzCompleted && !questionnaireResult) {
      setQuestionnairesAnswers((prev) => [
        ...prev,
        { id: questionnaire.id, answers: selectedAnswers },
      ]);
    }
  }, [
    questionnaireResult,
    quizzCompleted,
    selectedAnswers,
    questionnaire.id,
    setQuestionnairesAnswers,
  ]);

  const handleGoToCreator = () => {
    history.push("/creator");
  };

  if (quizzCompleted) {
    return (
      <div>
        <ScorePage selectedAnswers={selectedAnswers} questions={questionList} />
        {quizzCompleted && (
          <div>
            <button onClick={handleGoToCreator}>
              Add another questionnaire
            </button>
          </div>
        )}
      </div>
    );
  }

  const isQuestionAnswered = selectedAnswers.length >= currentQuestion + 1;

  return (
    <div>
      <div>
        <H1>
          Question {currentQuestion + 1} of {questionList.length}
        </H1>
        <div>{questionList[currentQuestion].questionText}</div>
        <div />
        <div onChange={handleChange}>
          {questionList[currentQuestion].answerOptions.map((answerOption) => (
            <React.Fragment key={answerOption.answerText}>
              {" "}
              <div>
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
              </div>
            </React.Fragment>
          ))}
          <div />
          <div>
            <BottomMarginedDiv />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireAnswers;
