interface Option {
  value: string;
  label: string;
}

export const HOME_SORT_OPTIONS: Option[] = [
  { value: 'recent', label: '최신순' },
  { value: 'rating', label: '별점 높은순' },
  { value: 'reviewCount', label: '리뷰 많은순' },
];
