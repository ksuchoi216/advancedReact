import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Redux from "./redux/redux";

const App = () => {
  const name = "KC";

  return (
    <AppWapper>
      <h1>Test Section</h1>
      <Contents name={name} />
      <Redux />
    </AppWapper>
  );
};

const AppWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default App;

// -----------------------------------------------------------------------
const Contents = ({ name }) => {
  const printlog = () => {
    console.log("This is from button");
  };
  

  return (
    <ContentsWapper>
      <h3>Hello, {name}</h3>
      <button onClick={printlog}>Create log</button>
      <Button background="green" onClick={printlog}>This</Button>
      <ButtonRed background="red" onClick={printlog}>This</ButtonRed>
    </ContentsWapper>
  );
};

Contents.propTypes = {
  name: PropTypes.string,
};

const ContentsWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: ${props => props.background};
  color: white;
  margin: 4px;
  border-radius: 5px;
  padding: 5px;
`;

const ButtonRed = styled(Button)`
  background-color: ${props => props.background}
`;
// -----------------------------------------------------------------------

