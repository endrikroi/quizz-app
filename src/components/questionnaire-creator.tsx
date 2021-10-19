import { ChangeEventHandler, useState } from "react";
import { v4 } from "uuid";
import { Question, Questionnaire } from "../types/types";
import QuestionsForm from "./questions-form";
import { FormRow, Input, Label, StyledButton, TopMarginedDiv } from "./styles";

export const QuestionnaireCreator: React.FunctionComponent<{
  onConfirmCreateQuestionnaire: (quesionnaire: Questionnaire) => void;
}> = ({ onConfirmCreateQuestionnaire }) => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const handleAddQuestionnaireConfirm = () => {
    const newQuestionnaire = {
      id: v4(),
      title,
      questions,
    };

    onConfirmCreateQuestionnaire(newQuestionnaire);
    setQuestions([]);
    setTitle("");
  };
  return (
    <TopMarginedDiv>
      <FormRow>
        <Label>Title: </Label>
        <Input value={title} onChange={handleTitleChange} />
      </FormRow>
      <QuestionsForm questionList={questions} setQuestionList={setQuestions} />
      <TopMarginedDiv>
        <StyledButton
          onClick={handleAddQuestionnaireConfirm}
          disabled={questions.length < 3}
        >
          Save questionnaire
        </StyledButton>
      </TopMarginedDiv>
    </TopMarginedDiv>
  );
};
