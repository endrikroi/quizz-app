import styled from "styled-components";

export const Input = styled.input`
  height: 30px;
  padding-left: 5px;
  padding-right: 5px;
  border: 1px solid lightgray;
`;

export const FormRow = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Label = styled.label`
  width: 300px;
  display: inline-block;
  padding-left: 10px;
`;

export const StyledBoldDiv = styled.div`
  text-align: center;
  font-size: 40px;
  text-transform: uppercase;
  color: #222;
  letter-spacing: 1px;
  font-family: "Playfair Display", serif;
  font-weight: 400;
`;

export const StyledSmallerFontDiv = styled.div`
  text-align: center;
  font-size: 35;
  text-transform: uppercase;
  color: #222;
  letter-spacing: 1px;
  font-family: "Playfair Display", serif;
  font-weight: 400;
`;

export const HeaderDiv = styled.div`
  text-align: center;
  font size: 25px;
  background: grey;
`;

export const QuestionsDiv = styled.div`
  font-size: 20px;
  text-align: center;
  color: white;
  background: lightgrey;
`;

export const TopMarginedDiv = styled.div`
  margin-top: 20px;
`;

export const StyledDiv = styled.div`
  margin-right: 15px;
  color: grey bold;
  background: grey;
`;

export const BackgroundWrapper = styled.div`
  height: calc(100vh - 100px);
  width: 950px;
  background-repeat: no-repeat;
  margin: auto;
`;

export const QuestionnaireDiv = styled.div`
  width: 600px;
  margin: auto;
  padding-top: 75px;
`;

export const StyledButton = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  display: inline-block;
  line-height: normal;
  user-select: none;
  vertical-align: middle;
  border: transparent;
  border-radius: 2px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 100%;
  padding: 0.5em 1em;
  text-decoration: none;
`;

export const Wrapper = styled.div`
  margin: 1em;
  color: green;
`;
