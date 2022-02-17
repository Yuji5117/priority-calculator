interface Marks {
  r_facilities_count: RFacilitiesCount;
}

interface RFacilitiesCount {
  title: string;
  option: Option[];
}

interface Option {
  value: number;
  label: string;
}

export const marks: any = [
  {
    r_facilities_count: {
      title: "既存施設アカウント数",
      num: 1,
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
  },
  {
    r_frequency: {
      title: "頻度",
      num: 1,
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
  },
  {
    r_support: {
      title: "サポート",
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
  },
  {
    r_developer: {
      title: "開発",
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
  },
  {
    i_user_spread_degrees: {
      title: "ユーザー波及度",
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
  },
  {
    i_after_actions: {
      title: "その後の行動",
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
  },
  {
    i_commit: {
      title: "社外コミット",
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
  },
  {
    i_strategy: {
      title: "事業戦略的観点",
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
  },
];
