interface Marks {
  id: number;
  title: string;
  name: string;
  range: {
    min: number;
    max: number;
  };
  num?: number;
  option: Option[];
}

interface Option {
  value: number;
  label: string;
}

export const marksForBugFix: Marks[] = [
  {
    id: 1,
    title: "既存施設アカウント数",
    name: "既存施設",
    num: 1,
    range: {
      min: 1,
      max: 5,
    },
    option: [
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
    ],
  },
  {
    id: 2,
    title: "頻度",
    name: "頻度",
    num: 1,
    range: {
      min: 1,
      max: 5,
    },
    option: [
      {
        value: 1,
        label: "1度きり",
      },
      {
        value: 2,
        label: "年に1回以上",
      },
      {
        value: 3,
        label: "3回",
      },
      {
        value: 4,
        label: "週1回以上",
      },
      {
        value: 5,
        label: "毎日",
      },
    ],
  },
  {
    id: 3,
    title: "社内関係者:サポート",
    name: "サポート",
    range: {
      min: 1,
      max: 3,
    },
    option: [
      {
        value: 1,
        label: "影響小",
      },
      {
        value: 2,
        label: "そこそこ",
      },
      {
        value: 3,
        label: "影響大",
      },
    ],
  },
  {
    id: 4,
    title: "社内関係者:開発",
    name: "開発",
    range: {
      min: 1,
      max: 3,
    },
    option: [
      {
        value: 1,
        label: "影響小",
      },
      {
        value: 2,
        label: "そこそこ",
      },
      {
        value: 3,
        label: "影響大",
      },
    ],
  },
  {
    id: 5,
    title: "ユーザー波及度",
    name: "ユーザー波及度",
    range: {
      min: 1,
      max: 5,
    },
    option: [
      {
        value: 1,
        label: "職員1人で完結",
      },
      {
        value: 3,
        label: "他の職員に波及",
      },
      {
        value: 5,
        label: "保護者まで届く",
      },
    ],
  },
  {
    id: 6,
    title: "その後の行動",
    name: "その後の行動",
    range: {
      min: 1,
      max: 5,
    },
    option: [
      {
        value: 1,
        label: "無視/問い合わせ",
      },
      {
        value: 3,
        label: "運用回避/丹念に説明",
      },
      {
        value: 5,
        label: "運用回避不可/解約",
      },
    ],
  },
  {
    id: 7,
    title: "社外コミット",
    name: "社外コミット",
    range: {
      min: 1,
      max: 25,
    },
    option: [
      {
        value: 0,
        label: "コミットなし",
      },
      {
        value: 25,
        label: "コミットあり",
      },
    ],
  },
  {
    id: 9,
    title: "事業戦略的観点",
    name: "事業戦略的観点",
    range: {
      min: 1,
      max: 10,
    },
    option: [
      {
        value: 0,
        label: "なし",
      },
      {
        value: 5,
        label: "小",
      },
      {
        value: 10,
        label: "大",
      },
    ],
  },
];

export const marksForFunctionalImporovement: Marks[] = [
  {
    id: 1,
    title: "既存施設アカウント数",
    name: "既存施設",
    num: 1,
    range: {
      min: 1,
      max: 5,
    },
    option: [
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
    ],
  },
  {
    id: 2,
    title: "頻度",
    name: "頻度",
    num: 1,
    range: {
      min: 1,
      max: 5,
    },
    option: [
      {
        value: 1,
        label: "1度きり",
      },
      {
        value: 2,
        label: "年に1回以上",
      },
      {
        value: 3,
        label: "3回",
      },
      {
        value: 4,
        label: "週1回以上",
      },
      {
        value: 5,
        label: "毎日",
      },
    ],
  },
  {
    id: 3,
    title: "社内関係者:サクセス",
    name: "サポート",
    range: {
      min: 1,
      max: 3,
    },
    option: [
      {
        value: 1,
        label: "影響小",
      },
      {
        value: 2,
        label: "そこそこ",
      },
      {
        value: 3,
        label: "影響大",
      },
    ],
  },
  {
    id: 4,
    title: "社内関係者:開発",
    name: "開発",
    range: {
      min: 1,
      max: 3,
    },
    option: [
      {
        value: 1,
        label: "影響小",
      },
      {
        value: 2,
        label: "そこそこ",
      },
      {
        value: 3,
        label: "影響大",
      },
    ],
  },
  {
    id: 5,
    title: "影響あるユーザーの種類",
    name: "影響あるユーザーの種類",
    range: {
      min: 1,
      max: 5,
    },
    option: [
      {
        value: 1,
        label: "1組",
      },
      {
        value: 3,
        label: "2組",
      },
      {
        value: 5,
        label: "3組",
      },
    ],
  },
  {
    id: 6,
    title: "感情の変化",
    name: "感情の変化",
    range: {
      min: 1,
      max: 5,
    },
    option: [
      {
        value: 1,
        label: "まぁ嬉しい",
      },
      {
        value: 3,
        label: "そこそこ嬉しい",
      },
      {
        value: 5,
        label: "とても嬉しい",
      },
    ],
  },
  {
    id: 7,
    title: "社外コミット",
    name: "社外コミット",
    range: {
      min: 1,
      max: 25,
    },
    option: [
      {
        value: 0,
        label: "コミットなし",
      },
      {
        value: 25,
        label: "コミットあり",
      },
    ],
  },
  {
    id: 9,
    title: "事業戦略的観点",
    name: "事業戦略的観点",
    range: {
      min: 1,
      max: 10,
    },
    option: [
      {
        value: 0,
        label: "なし",
      },
      {
        value: 5,
        label: "小",
      },
      {
        value: 10,
        label: "大",
      },
    ],
  },
];
