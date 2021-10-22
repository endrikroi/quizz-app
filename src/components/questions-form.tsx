import React, { FunctionComponent } from "react";
import { Answer, Question } from "../types/types";
import { FormRow, Input, Label, TopMarginedDiv, StyledButton } from "./styles";

interface QuestionsFormProps {
  questionList: Question[];
  setQuestionList: React.Dispatch<React.SetStateAction<Question[]>>;
}

const QuestionsForm: FunctionComponent<QuestionsFormProps> = ({
  setQuestionList,
}) => {
  const [question, setQuestion] = React.useState<string>("");

  const [answerItems, setAnswerItems] = React.useState<Answer[]>([]);

  const [answerToAdd, setAnswerToAdd] = React.useState("");

  const handleAnswersToAddClick = () => {
    if (!answerToAdd) {
      return;
    }
    setAnswerItems((prevAnswerItems) => [
      ...prevAnswerItems,
      { answerText: answerToAdd, isCorrect: false },
    ]);
    setAnswerToAdd("");
  };

  const handleAnswerChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setAnswerToAdd(e.target.value);
  };

  const handleQuestionChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setQuestion(e.target.value);
  };

  const handleAnswersKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.keyCode === 13) {
      handleAnswersToAddClick();
    }
  };

  const isAnyAnswerCorrect = answerItems.some((ai) => ai.isCorrect === true);

  const handleCorrectAnswerChange: React.ChangeEventHandler<HTMLInputElement> =
    (e) => {
      setAnswerItems((prevAnswerItems) => {
        const newArr = prevAnswerItems.map((ai) =>
          ai.answerText === e.target.value
            ? { ...ai, isCorrect: true }
            : { ...ai, isCorrect: false }
        );
        return newArr;
      });
    };

  const handleConfirm = () => {
    setQuestionList((previousQuestionList) => [
      ...previousQuestionList,
      { questionsText: question, answerOptions: answerItems },
    ]);
    if (!isAnyAnswerCorrect) {
      return;
    }
    setAnswerToAdd("");
    setQuestion("");
    setAnswerItems([]);
  };

  return (
    <div>
      <div>
        <FormRow>
          <Label>Question: </Label>
          <Input onChange={handleQuestionChange} type="text" value={question} />
        </FormRow>
        <TopMarginedDiv />
        <div>
          <FormRow>
            <Label>Add your answer alternatives: </Label>
            <Input
              type="text"
              onChange={handleAnswerChange}
              value={answerToAdd}
              onKeyDown={handleAnswersKeyDown}
              disabled={!question}
            />
            <StyledButton
              onClick={handleAnswersToAddClick}
              disabled={!answerToAdd || !question}
            >
              Add
            </StyledButton>
          </FormRow>
          <div>
            {answerItems.map((item) => (
              <div key={item.answerText}>
                <input
                  type="radio"
                  value={item.answerText}
                  name="answers"
                  onChange={handleCorrectAnswerChange}
                />
                {item.answerText}
              </div>
            ))}
          </div>
          <div>
            <StyledButton
              onClick={handleConfirm}
              disabled={
                answerItems.length < 2 || !question || !isAnyAnswerCorrect
              }
            >
              Add question
            </StyledButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsForm;
