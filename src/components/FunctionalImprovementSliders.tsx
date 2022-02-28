import { Slider } from "@material-ui/core";
import styled from "styled-components";

import { marks } from "../store/marks";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";

interface PropsType {
  priorityScores: number[];
  caluculatePriorityScore: (event: any) => void;
}

const FunctionalImprovementSliders = ({
  priorityScores,
  caluculatePriorityScore,
}: PropsType) => {
  return (
    <>
      <div>
        <Title>{marks[0].r_facilities_count.title}</Title>
        <Slider
          onChange={caluculatePriorityScore}
          aria-label="Temperature"
          defaultValue={1}
          value={priorityScores[0]}
          valueLabelDisplay="auto"
          name="既存施設"
          step={null}
          marks={marks[0].r_facilities_count.option}
          min={1}
          max={5}
          color="secondary"
        />
      </div>
      <div>
        <Title>頻度</Title>
        <Slider
          onChange={caluculatePriorityScore}
          aria-label="Temperature"
          value={priorityScores[1]}
          name="頻度"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marks[1].r_frequency.option}
          min={1}
          max={5}
          color="secondary"
        />
      </div>
      <div>
        <Title>社内関係者:サクセス</Title>
        <Slider
          onChange={caluculatePriorityScore}
          aria-label="Temperature"
          value={priorityScores[2]}
          name="サポート"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marks[2].r_support.option}
          min={1}
          max={3}
          color="secondary"
        />
      </div>
      <div>
        <Title>社内関係者:開発</Title>
        <Slider
          onChange={caluculatePriorityScore}
          aria-label="Temperature"
          value={priorityScores[3]}
          name="開発"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marks[3].r_developer.option}
          min={1}
          max={3}
          color="secondary"
        />
      </div>
      <div>
        <TitleContainer>
          <Title>影響あるユーザーの種類</Title>
          <Tooltip title="（管理職/事務、一般職員、保護者/子ども）" arrow>
            <InfoIcon color="action" />
          </Tooltip>
        </TitleContainer>
        <Slider
          onChange={caluculatePriorityScore}
          aria-label="Temperature"
          value={priorityScores[8]}
          name="影響あるユーザーの種類"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marks[8].i_affected_users_type.option}
          min={1}
          max={5}
          color="secondary"
        />
      </div>
      <div>
        <Title>感情の変化</Title>
        <Slider
          onChange={caluculatePriorityScore}
          aria-label="Temperature"
          value={priorityScores[9]}
          name="感情の変化"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marks[9].i_emotion_change.option}
          min={1}
          max={5}
          color="secondary"
        />
      </div>
      <div>
        <Title>社外コミット</Title>
        <Slider
          onChange={caluculatePriorityScore}
          aria-label="Temperature"
          value={priorityScores[6]}
          defaultValue={0}
          name="社外コミット"
          valueLabelDisplay="auto"
          step={null}
          marks={marks[6].i_commit.option}
          min={0}
          max={25}
          color="secondary"
        />
      </div>
      <div>
        <Title>事業戦略的観点</Title>
        <Slider
          onChange={caluculatePriorityScore}
          aria-label="Temperature"
          value={priorityScores[7]}
          defaultValue={0}
          name="事業戦略的観点"
          valueLabelDisplay="auto"
          step={null}
          marks={marks[7].i_strategy.option}
          min={0}
          max={10}
          color="secondary"
        />
      </div>
    </>
  );
};

export default FunctionalImprovementSliders;

const Title = styled.h2`
  display: inline-block;
  font-size: 18px;
  border-bottom: 3px double #dcafe2;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    padding-right: 8px;
  }
`;
