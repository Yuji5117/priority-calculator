import styled from "styled-components";
import { Box } from "@material-ui/core";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import PriorityCopy from "./PriorityCopy";

interface PropsType {
  priorityScores: number[];
  priorityScore: number;
  priorityType: string;
  onChangePriorityType: (e: any, newValue: string) => void;
  getCorporateInsiderNum: (num1: number, num2: number) => number;
}

const Header = ({
  priorityScores,
  priorityScore,
  priorityType,
  onChangePriorityType,
  getCorporateInsiderNum,
}: PropsType) => {
  const createPriorityScoreFormula = (
    text: string,
    priorityType: string,
    priorityScores: number[],
    getCorporateInsiderNum: (num1: number, num2: number) => number
  ): string => {
    if (priorityType === "1") {
      text += `(施設アカウント数×頻度+社内関係者)×(関係者×その後の行動+社外コミット有無+事業戦略的観点)=メリット量`;
    } else if (priorityType === "2") {
      text += `(施設アカウント数×頻度+社内関係者)×(関係者×感情の変化+コミット有無+事業戦略的観点)=メリット量`;
    }
    text += "\n";
    if (priorityType === "1") {
      text += `(${priorityScores[0]}×${
        priorityScores[1]
      }+${getCorporateInsiderNum(priorityScores[2], priorityScores[3])})×(${
        priorityScores[4]
      }×${priorityScores[5]}+${priorityScores[6]}+${
        priorityScores[7]
      })=${priorityScore}`;
    } else if (priorityType === "2") {
      text += `(${priorityScores[0]}×${
        priorityScores[1]
      }+${getCorporateInsiderNum(priorityScores[2], priorityScores[3])})×(${
        priorityScores[4]
      }×${priorityScores[5]}+${priorityScores[6]}+${
        priorityScores[7]
      })=${priorityScore}`;
    }

    return text;
  };

  const createPriorityScoreBoard = (
    text: string,
    priorityType: string,
    priorityScores: number[],
    getCorporateInsiderNum: (num1: number, num2: number) => number
  ): string => {
    text += "\n";
    text += "\n";
    text += "| name | value |\n";
    text += "| ---- | ---- |\n";
    text += `| 既存施設アカウント数 | ${priorityScores[0]} |\n`;
    text += `| 頻度 | ${priorityScores[1]} |\n`;
    text += `| 社内関係者 | ${getCorporateInsiderNum(
      priorityScores[2],
      priorityScores[3]
    )} |\n`;
    if (priorityType === "1") {
      text += `| ユーザー波及度 | ${priorityScores[4]} |\n`;
      text += `| その後の行動 | ${priorityScores[5]} |\n`;
    } else if (priorityType === "2") {
      text += `| 影響あるユーザーの種類（管理職/事務、一般職員、保護者/子ども） | ${priorityScores[4]} |\n`;
      text += `| 感情の変化 | ${priorityScores[5]} |\n`;
    }
    text += `| 社外コミット | ${priorityScores[6]} |\n`;
    text += `| 事業戦略的観点 | ${priorityScores[7]} |\n`;
    text += "| **total** | **" + priorityScore + "** |\n";

    return text;
  };

  const generateFormatedTextAsMarkdown = (): string => {
    let text = "";
    text += "## メリット量\n";
    text += "\n";

    text = createPriorityScoreFormula(
      text,
      priorityType,
      priorityScores,
      getCorporateInsiderNum
    );
    text = createPriorityScoreBoard(
      text,
      priorityType,
      priorityScores,
      getCorporateInsiderNum
    );
    return text;
  };

  return (
    <Wrapper>
      <Container>
        <Title>Priority Calculator</Title>
        <Content>
          <Text>メリット量:{priorityScore}</Text>
          <PriorityCopy
            generateFormatedTextAsMarkdown={generateFormatedTextAsMarkdown}
          />
        </Content>
      </Container>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={priorityType} onChange={onChangePriorityType} centered>
          <Tab value="1" label="バグ改修" />
          <Tab value="2" label="機能改善" />
        </Tabs>
      </Box>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  box-sizing: border-box;
`;

const Container = styled.div`
  padding: 20px 30px 5px 30px;
  background: #2f99ce;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #ffffff;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  color: #ffffff;
  margin-right: 6px;
`;
