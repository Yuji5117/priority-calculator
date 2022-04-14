import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header comp", () => {
  const priorityScores = [3, 3, 1, 1, 1, 1, 25, 0];
  const priorityType = "1";

  const involvedPplOptions = [
    [0, 1, 2],
    [1, 3, 4],
    [2, 4, 5],
  ];

  const onChangePriorityType = (e: any, priorityType: string): void => {
    priorityType = "2";
  };

  const getCorporateInsiderNum = (num1: number, num2: number) => {
    return involvedPplOptions[num1 - 1][num2 - 1];
  };

  const CorporateInsiderNum = getCorporateInsiderNum(
    priorityScores[2],
    priorityScores[3]
  );

  const priorityScore =
    (priorityScores[0] * priorityScores[1] + CorporateInsiderNum) *
    (priorityScores[4] * priorityScores[5] +
      priorityScores[6] +
      priorityScores[7]);

  test("header test", () => {
    render(
      <Header
        priorityScores={priorityScores}
        priorityScore={priorityScore}
        priorityType={priorityType}
        onChangePriorityType={onChangePriorityType}
        getCorporateInsiderNum={getCorporateInsiderNum}
      />
    );

    // screen.debug();

    expect(screen.getByText("メリット量:234")).toBeInTheDocument();
  });
});
