import { Slider } from "@material-ui/core";
import styled from "styled-components";

import { marksForBugFix } from "../store/marks";

interface PropsType {
  priorityScores: number[];
  caluculatePriorityScore: (event: any) => void;
}

const ScoreSliders = ({
  priorityScores,
  caluculatePriorityScore,
}: PropsType) => {
  return (
    <>
      {marksForBugFix.map((mark, index) => (
        <Item key={mark.id}>
          <Title>{mark.title}</Title>
          <Slider
            onChange={caluculatePriorityScore}
            defaultValue={1}
            value={priorityScores[index]}
            valueLabelDisplay="auto"
            name={mark.name}
            size="small"
            step={null}
            marks={mark.option}
            min={mark.range.min}
            max={mark.range.max}
          />
        </Item>
      ))}
    </>
  );
};

export default ScoreSliders;

const Item = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 16px;
  border-bottom: 2px double #004170;
`;
