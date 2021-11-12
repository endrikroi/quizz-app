import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Questionnaire } from "../types/types";

interface NavigationProps {
  questionnaires: Questionnaire[];
}

const QuestionnaireSelector: FunctionComponent<NavigationProps> = ({
  questionnaires,
}) => {
  const links = questionnaires.map((questionnaire) => (
    <li key={questionnaire.id}>
      <Link to={`/home/questionnaire/${questionnaire.id}`}>
        {questionnaire.title}
      </Link>
    </li>
  ));
  return (
    <nav>
      <ul>{links}</ul>
    </nav>
  );
};

export default QuestionnaireSelector;
