interface Option {
  value: string;
  label: string;
}

export const SORT_OPTIONS: Option[] = [
  { value: 'recent', label: '최신순' },
  { value: 'ratingDesc', label: '별점 높은순' },
  { value: 'ratingAsc', label: '별점 낮은순' },
  { value: 'likeCount', label: '좋아요순' },
];
