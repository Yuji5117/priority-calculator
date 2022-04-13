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
      {/* <Item>
        <Title>{marksForFunctionalImporovement[0].title}</Title>
        <Slider
          onChange={caluculatePriorityScore}
          defaultValue={1}
          value={priorityScores[0]}
          valueLabelDisplay="auto"
          size="small"
          name="既存施設"
          step={null}
          marks={marksForFunctionalImporovement[0].option}
          min={1}
          max={5}
          color="secondary"
        />
      </Item>
      <Item>
        <Title>頻度</Title>
        <Slider
          onChange={caluculatePriorityScore}
          value={priorityScores[1]}
          name="頻度"
          size="small"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marksForFunctionalImporovement[1].option}
          min={1}
          max={5}
          color="secondary"
        />
      </Item>
      <Item>
        <Title>社内関係者:サクセス</Title>
        <Slider
          onChange={caluculatePriorityScore}
          value={priorityScores[2]}
          name="サポート"
          size="small"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marksForFunctionalImporovement[2].option}
          min={1}
          max={3}
          color="secondary"
        />
      </Item>
      <Item>
        <Title>社内関係者:開発</Title>
        <Slider
          onChange={caluculatePriorityScore}
          value={priorityScores[3]}
          name="開発"
          size="small"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marksForFunctionalImporovement[3].option}
          min={1}
          max={3}
          color="secondary"
        />
      </Item>
      <Item>
        <TitleContainer>
          <Title>影響あるユーザーの種類</Title>
          <Tooltip title="（管理職/事務、一般職員、保護者/子ども）" arrow>
            <InfoIcon color="action" />
          </Tooltip>
        </TitleContainer>
        <Slider
          onChange={caluculatePriorityScore}
          value={priorityScores[8]}
          name="影響あるユーザーの種類"
          size="small"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marksForFunctionalImporovement[8].option}
          min={1}
          max={5}
          color="secondary"
        />
      </Item>
      <Item>
        <Title>感情の変化</Title>
        <Slider
          onChange={caluculatePriorityScore}
          value={priorityScores[9]}
          name="感情の変化"
          size="small"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marksForFunctionalImporovement[9].option}
          min={1}
          max={5}
          color="secondary"
        />
      </Item>
      <Item>
        <Title>社外コミット</Title>
        <Slider
          onChange={caluculatePriorityScore}
          value={priorityScores[6]}
          defaultValue={0}
          name="社外コミット"
          size="small"
          valueLabelDisplay="auto"
          step={null}
          marks={marksForFunctionalImporovement[6].option}
          min={0}
          max={25}
          color="secondary"
        />
      </Item>
      <Item>
        <Title>事業戦略的観点</Title>
        <Slider
          onChange={caluculatePriorityScore}
          value={priorityScores[7]}
          defaultValue={0}
          name="事業戦略的観点"
          size="small"
          valueLabelDisplay="auto"
          step={null}
          marks={marksForFunctionalImporovement[7].option}
          min={0}
          max={10}
          color="secondary"
        />
      </Item> */}
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
