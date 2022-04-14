import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import { Slider } from "@material-ui/core";
import styled from "styled-components";

import { marksForFunctionalImporovement } from "../store/marks";

interface PropsType {
  priorityScores: number[];
  caluculatePriorityScore: (event: any) => void;
}

const FunctionalImprovementSliders = ({
  priorityScores,
  caluculatePriorityScore,
}: PropsType) => {
  const SliderTitle = ({ title }: { title: string }) => {
    if (title === "影響あるユーザーの種類") {
      return (
        <TitleContainer>
          <Title>{title}</Title>
          <Tooltip title="（管理職/事務、一般職員、保護者/子ども）" arrow>
            <InfoIcon color="action" />
          </Tooltip>
        </TitleContainer>
      );
    }
    return <Title>{title}</Title>;
  };

  return (
    <>
      {marksForFunctionalImporovement.map((mark, index) => (
        <Item key={mark.id}>
          <SliderTitle title={mark.title} />
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
            color="secondary"
          />
        </Item>
      ))}
    </>
  );
};

export default FunctionalImprovementSliders;

const Item = styled.div`
  margin-bottom: 20px;
`;

const Title = styled.h2`
  display: inline-block;
  font-size: 16px;
  border-bottom: 2px double #72007c;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    padding-right: 8px;
  }
`;
