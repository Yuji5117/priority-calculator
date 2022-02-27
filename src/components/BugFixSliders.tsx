import { Slider } from "@material-ui/core";
import styled from "styled-components";

import { marks } from "../store/marks";

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
        />
      </div>
      <div>
        <Title>社内関係者:サポート</Title>
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
        />
      </div>
      <div>
        <Title>ユーザー波及度</Title>
        <Slider
          onChange={caluculatePriorityScore}
          aria-label="Temperature"
          value={priorityScores[4]}
          name="ユーザー波及度"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marks[4].i_user_spread_degrees.option}
          min={1}
          max={5}
        />
      </div>
      <div>
        <Title>その後の行動</Title>
        <Slider
          onChange={caluculatePriorityScore}
          aria-label="Temperature"
          value={priorityScores[5]}
          name="その後の行動"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={null}
          marks={marks[5].i_after_actions.option}
          min={1}
          max={5}
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
        />
      </div>
    </>
  );
};

export default ScoreSliders;

const Title = styled.h2`
  display: inline-block;
  font-size: 18px;
  border-bottom: 3px double #2f99ce;
`;
