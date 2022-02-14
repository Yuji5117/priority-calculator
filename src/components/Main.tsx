import { Slider } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const Main = () => {
  const marks = [
    {
      value: 1,
      label: "全施設の3割未満",
    },
    {
      value: 3,
      label: "3〜6割",
    },
    {
      value: 5,
      label: "6割以上",
    },
  ];

  return (
    <Wrapper>
      <Container>
        <div>
          <Title>既存施設アカウント数</Title>
          <Slider
            aria-label="Temperature"
            defaultValue={1}
            valueLabelDisplay="auto"
            step={null}
            marks={marks}
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
            marks={marks}
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
            marks={marks}
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
            marks={marks}
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
            marks={marks}
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
            marks={marks}
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
            marks={marks}
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
            marks={marks}
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
