export type Answer = {
  answerText: string;
  isCorrect: boolean;
};

export type Question = {
  questionText: string;
  answerOptions: Answer[];
};

export type Questionnaire = {
  id: string;
  title: string;
  questions: Question[];
};

export type User = {
  name: string;
  email: string;
  password: string;
};

export type QuestionnaireResult = {
  id: string;
  answers: string[];
};
