import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import ScoreBoard from "./components/ScoreBoard";

import { marks } from "./store/marks";

const involved_ppl_options = [
  [0, 1, 2],
  [1, 3, 4],
  [2, 4, 5],
];

function App() {
  const [priorityScore, setPriorityScore] = useState<number>(1);
  const [priorityType, setPriorityType] = useState<number>(1);
  const [priorityScores, setPriorityScores] = useState([
    1, 1, 1, 1, 1, 1, 0, 0,
  ]);

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
  }, [priorityScores]);

  const getCorporateInsiderNum = (num1: number, num2: number) => {
    return involved_ppl_options[num1 - 1][num2 - 1];
  };

  const caluculatePriorityScore = (event: any) => {
    console.log(marks[0].r_facilities_count.num);
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
        priorityScores[4] = event.target.value;
        setPriorityScores([...priorityScores]);
        break;
      case "その後の行動":
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

  const onChengePriorityType = (priorityType: number) => {
    setPriorityType(priorityType);
  };

  return (
    <Wrapper className="App">
      <Header
        priorityScore={priorityScore}
        onChengePriorityType={onChengePriorityType}
      />
      <ScoreBoard
        priorityScores={priorityScores}
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
