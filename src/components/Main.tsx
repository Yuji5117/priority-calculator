import { Slider } from "@material-ui/core";
import styled from "styled-components";

import { marks } from "../store/marks";

interface PropsType {
  priorityScore: number;
  priorityType: number;
  caluculatePriorityScore: (event: any) => void;
}

const Main = (props: PropsType) => {
  return (
    <Wrapper>
      <Container>
        <div>
          <Title>{marks.r_facilities_count.title}</Title>
          <Slider
            value={props.priorityScore}
            onChange={props.caluculatePriorityScore}
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={null}
            marks={marks.r_facilities_count.option}
            min={1}
            max={5}
          />
        </div>
        <div>
          <Title>頻度</Title>
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={null}
            marks={marks.r_facilities_count.option}
            min={1}
            max={5}
          />
        </div>
        <div>
          <Title>社内関係者:サポート</Title>
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={null}
            // marks={marks}
            min={1}
            max={5}
          />
        </div>
        <div>
          <Title>社内関係者:開発</Title>
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={null}
            // marks={marks}
            min={1}
            max={5}
          />
        </div>
        <div>
          <Title>ユーザー波及度</Title>
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={null}
            // marks={marks}
            min={1}
            max={5}
          />
        </div>
        <div>
          <Title>その後の行動</Title>
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={null}
            // marks={marks}
            min={1}
            max={5}
          />
        </div>
        <div>
          <Title>社外コミット</Title>
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={null}
            // marks={marks}
            min={1}
            max={5}
          />
        </div>
        <div>
          <Title>事業戦略的観点</Title>
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={null}
            // marks={marks}
            min={1}
            max={5}
          />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  box-sizing: border-box;
  /* background: #ffffff; */
  background: pink;
`;

const Container = styled.div`
  padding: 20px 30px 0 30px;
  background: #ffffff;
`;

const Title = styled.h2`
  font-size: 18px;
`;
