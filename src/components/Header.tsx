import { HiClipboardCopy } from "react-icons/hi";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";
import { useState } from "react";

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
  const [openTooltip, setOpenTooltip] = useState<boolean>(false);
  const copyTextToClipboard = (text: any): void => {
    navigator.clipboard.writeText(text);
  };

  const formatedAsMarkdown = (): string => {
    let text = "";
    text += "## メリット量\n";
    text += "\n";
    text += `(施設アカウント数×頻度+社内関係者)×(関係者×感情の変化+コミット有無+事業戦略上の必要)=メリット量`;
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
        priorityScores[8]
      }×${priorityScores[9]}+${priorityScores[6]}+${
        priorityScores[7]
      })=${priorityScore}`;
    }
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
      text += `| ユーザー波及度 | ${priorityScores[8]} |\n`;
      text += `| 感情の変化 | ${priorityScores[9]} |\n`;
    }
    text += `| 社外コミット | ${priorityScores[6]} |\n`;
    text += `| 事業戦略的観点 | ${priorityScores[7]} |\n`;
    text += "| **total** | **" + priorityScore + "** |\n";
    return text;
  };

  const handleTooltipOpen = () => {
    setOpenTooltip(true);
  };

  const handleTooltipClose = () => {
    setOpenTooltip(false);
  };

  return (
    <Wrapper>
      <Container>
        <Title>Priority Calculator</Title>
        <Content>
          <p>メリット量:{priorityScore}</p>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            title="コピーしました！"
            open={openTooltip}
            leaveDelay={1500}
            onClose={handleTooltipClose}
            disableFocusListener
            disableTouchListener
          >
            <IconButton
              color="primary"
              onClick={() => copyTextToClipboard(formatedAsMarkdown())}
            >
              <HiClipboardCopy onClick={() => handleTooltipOpen()} size={25} />
            </IconButton>
          </Tooltip>
        </Content>
      </Container>
      <Tabs onChange={onChangePriorityType}>
        <Tab value="1" label="バグ改修" />
        <Tab value="2" label="機能改善" />
      </Tabs>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  box-sizing: border-box;
  /* background: #1a8cd8; */
  background: skyblue;
`;

const Container = styled.header`
  padding: 20px 30px 0 30px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const MenuTab = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5px;

  & * + * {
    margin-left: 10px;
  }
`;

const TabItem = styled.div`
  padding: 10px 40px;
  border-bottom: 1px solid;
  border-radius: 15px 15px 0 0;
  color: #ffffff;
`;
