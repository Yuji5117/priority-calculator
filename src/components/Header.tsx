import React from "react";
import styled from "styled-components";

interface PropsType {
  priorityScore: number;
  onChengePriorityType: (priorityScore: number) => void;
}

const Header = ({ priorityScore }: PropsType) => {
  return (
    <Wrapper>
      <Container>
        <Title>Priority Calculator</Title>
        <Content>
          <p>メリット量:{priorityScore}</p>
          <p>コピー</p>
        </Content>
        <MenuTab>
          <TabItem>バグ改修</TabItem>
          <TabItem>機能改善</TabItem>
        </MenuTab>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  box-sizing: border-box;
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
`;

const MenuTab = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
`;

const TabItem = styled.div`
  padding: 10px 40px;
  background-color: red;
  border-radius: 15px 15px 0 0;
`;
