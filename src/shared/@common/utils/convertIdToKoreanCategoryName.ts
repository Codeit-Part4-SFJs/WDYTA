const CATEGORIES_ID: { [key: number]: string } = {
  1: '음악',
  2: '영화/드라마',
  3: '강의/책',
  4: '호텔',
  5: '가구/인테리어',
  6: '식당',
  7: '전자기기',
  8: '화장품',
  9: '의류/잡화',
  10: '앱',
};

export const convertIdToKoreanCategoryName = (categoryId: number) => {
  const koreanCategory = CATEGORIES_ID[categoryId];

  return koreanCategory;
};
