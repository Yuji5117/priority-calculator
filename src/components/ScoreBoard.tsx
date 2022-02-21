import styled from "styled-components";

import BugFixSliders from "./BugFixSliders";
import FunctionalImprovementSliders from "./FunctionalImprovementSliders";

interface PropsType {
  priorityScores: number[];
  priorityType: string;
  caluculatePriorityScore: (event: any) => void;
}

const ScoreBoard = (props: PropsType) => {
  return (
    <Wrapper>
      <Container>
        {props.priorityType === "1" && (
          <BugFixSliders
            priorityScores={props.priorityScores}
            caluculatePriorityScore={props.caluculatePriorityScore}
          />
        )}
        {props.priorityType === "2" && (
          <FunctionalImprovementSliders
            priorityScores={props.priorityScores}
            caluculatePriorityScore={props.caluculatePriorityScore}
          />
        )}
      </Container>
    </Wrapper>
  );
};

export default ScoreBoard;

const Wrapper = styled.div`
  height: 470px;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const Container = styled.div`
  padding: 20px 70px 20px 70px;
  background: #ffffff;
`;
