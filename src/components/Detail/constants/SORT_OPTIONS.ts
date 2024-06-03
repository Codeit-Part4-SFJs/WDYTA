interface Option {
  value: string;
  label: string;
}

export const SORT_OPTIONS: Option[] = [
  { value: '최신순', label: '최신순' },
  { value: '별점 높은순', label: '별점 높은순' },
  { value: '별점 낮은순', label: '별점 낮은순' },
  { value: '좋아요순', label: '좋아요순' },
];
