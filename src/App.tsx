import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [priorityScore, setPriorityScore] = useState<number>(0);
  const [priorityType, setPriorityType] = useState<number>(1);

  return (
    <Wrapper className="App">
      <Header priorityScore={priorityScore} />
      <Main />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;
