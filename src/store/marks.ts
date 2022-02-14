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

export const marks: Marks = {
  r_facilities_count: {
    title: "既存施設アカウント数",
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
};
