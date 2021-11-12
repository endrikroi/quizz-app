import styled from "styled-components";

export const Input = styled.input`
  height: 30px;
  padding-left: 5px;
  padding-right: 5px;
  border: 1px solid lightgray;
`;
export const StyledInput = styled.input`
  height: 15px;
  padding-left: 5px;
  padding-right: 5px;
  border: 1px solid gray;
  margin: auto;
`;

export const FrameDiv = styled.div`
  border-style: ridge;
  height: inherit;
`;

export const FormRow = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Label = styled.label`
  width: 100px;
  display: inline-block;
`;

export const AlternativesLabel = styled.label`
  width: 230px;
  display: inline-block;
`;

export const StyledBoldDiv = styled.div`
  text-align: center;
  font-size: 25px;
  color: #222;
  letter-spacing: 1px;
  font-family: "Playfair Display", serif;
  font-weight: 400;
`;

export const StyledDiv = styled.div`
  margin-right: 15px;
  color: grey bold;
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
  font-size: 25px;
  background: grey;
`;

export const RightPositionedDiv = styled.div`
  text-align: right;
  margin-top: 10px;
  border-bottom: 1px solid lightgrey;
`;

export const CenteredDiv = styled.div`
  font-size: 15px;
  text-align: center;
  margin: auto;
  position: auto;
`;

export const TopMarginedDiv = styled.div`
  margin-top: 20px;
`;

export const BottomMarginedDiv = styled.div`
  margin-top: 10px;
`;

export const LabelMarginedDiv = styled.div`
  margin-top: 10px;
`;

export const BackgroundWrapper = styled.div`
  margin: 0px;
  padding: 0px 20px;
  display: flex;
  box-sizing: border-box;
  display: block;
  position: relative;
  margin: 8px;
  max-width: 900px;
  background: white;
  border: #030303;
  padding: 20px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 10px;
  background-attachment: scroll;
  margin: 50px auto;
`;

export const QuestionnaireDiv = styled.div`
  width: 600px;
  margin: auto;
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
  font-size: 80%;
  padding: 0.5em 1em;
  text-decoration: none;
  background-color: #25259b;
  opacity: 5;
  background-color: #1a7fd1;
  color: #ffffff;
  transition-duration: 0.4s;

  :disabled {
    background-color: #acacbd;
  }
`;

export const Wrapper = styled.div`
  margin: 1em;
  width: 600px;
  margin: auto;
  text-align: center;
`;

export const LoginWrapper = styled.div`
  margin: 1em;
  width: 600px;
  margin: auto;
  text-align: center;
  border: ridge;
`;

export const H1 = styled.h1`
  font-size: 1rem;
  text-align: left;
  background-color: white;
  width: 100%;
  height: 2rem;
  display: flex;
  font-size: 16px;
  color: #070707;
  font-variant: normal;
  font-style: oblique;
  position: relative;
`;
