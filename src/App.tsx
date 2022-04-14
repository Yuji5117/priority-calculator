import { useEffect, useState } from "react";

import styled from "styled-components";

import ScoreBoard from "./components/ScoreBoard";
import Header from "./components/Header";

const involvedPplOptions = [
  [0, 1, 2],
  [1, 3, 4],
  [2, 4, 5],
];

function App() {
  const [priorityScore, setPriorityScore] = useState<number>(1);
  const [priorityType, setPriorityType] = useState<string>("1");
  const [priorityScores, setPriorityScores] = useState<number[]>([
    1, 1, 1, 1, 1, 1, 0, 0,
  ]);

  useEffect(() => {
    setPriorityScores([1, 1, 1, 1, 1, 1, 0, 0]);
  }, [priorityType]);

  useEffect(() => {
    const CorporateInsiderNum = getCorporateInsiderNum(
      priorityScores[2],
      priorityScores[3]
    );

    const sumScore =
      (priorityScores[0] * priorityScores[1] + CorporateInsiderNum) *
      (priorityScores[4] * priorityScores[5] +
        priorityScores[6] +
        priorityScores[7]);
    setPriorityScore(sumScore);
  }, [priorityScores, priorityType]);

  const getCorporateInsiderNum = (num1: number, num2: number) => {
    return involvedPplOptions[num1 - 1][num2 - 1];
  };

  const caluculatePriorityScore = (event: any) => {
    switch (event.target.name) {
      case "既存施設":
        priorityScores[0] = event.target.value;
        setPriorityScores([...priorityScores]);
        break;
      case "頻度":
        priorityScores[1] = event.target.value;
        setPriorityScores([...priorityScores]);
        break;
      case "サポート":
        priorityScores[2] = event.target.value;
        setPriorityScores([...priorityScores]);
        break;
      case "開発":
        priorityScores[3] = event.target.value;
        setPriorityScores([...priorityScores]);
        break;
      case "ユーザー波及度":
      case "影響あるユーザーの種類":
        priorityScores[4] = event.target.value;
        setPriorityScores([...priorityScores]);
        break;
      case "その後の行動":
      case "感情の変化":
        priorityScores[5] = event.target.value;
        setPriorityScores([...priorityScores]);
        break;
      case "社外コミット":
        priorityScores[6] = event.target.value;
        setPriorityScores([...priorityScores]);
        break;
      case "事業戦略的観点":
        priorityScores[7] = event.target.value;
        setPriorityScores([...priorityScores]);
        break;
    }
  };

  const onChangePriorityType = (e: any, priorityType: string): void => {
    setPriorityType(priorityType);
  };

  return (
    <Wrapper>
      <Container>
        <Header
          priorityScores={priorityScores}
          priorityScore={priorityScore}
          priorityType={priorityType}
          onChangePriorityType={onChangePriorityType}
          getCorporateInsiderNum={getCorporateInsiderNum}
        />
        <ScoreBoard
          priorityScores={priorityScores}
          priorityType={priorityType}
          caluculatePriorityScore={caluculatePriorityScore}
        />
      </Container>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 450px;
  height: 600px;
`;

const Container = styled.div`
  height: 600px;
  display: flex;
  flex-direction: column;
`;
