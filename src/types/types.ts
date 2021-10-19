export type Answer = {
  answerText: string;
  isCorrect: boolean;
};

export type Question = {
  questionsText: string;
  answerOptions: Answer[];
};

export type Questionnaire = {
  id: string;
  title: string;
  questions: Question[];
};
