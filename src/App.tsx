import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [priorityScore, setPriorityScore] = useState<number>(0);
  const [priorityType, setPriorityType] = useState<number>(1);

  const caluculatePriorityScore = (event: any) => {
    setPriorityScore(event.target.value);
  };

  const onChengePriorityType = (priorityType: number) => {
    setPriorityType(priorityType);
  };

  return (
    <Wrapper className="App">
      <Header
        priorityScore={priorityScore}
        onChengePriorityType={onChengePriorityType}
      />
      <Main
        priorityScore={priorityScore}
        priorityType={priorityType}
        caluculatePriorityScore={caluculatePriorityScore}
      />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 400px;
  height: 400px;
`;
