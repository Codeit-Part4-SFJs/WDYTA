const CATEGORIES_ID: { [key: number]: string } = {
  1: 'music',
  2: 'movie_drama',
  3: 'lecture_book',
  4: 'hotel',
  5: 'furniture_interior',
  6: 'restaurant',
  7: 'devices',
  8: 'cosmetics',
  9: 'fashion_accessories',
  10: 'app',
};

export const convertCategoryIdToCategory = (categoryId: number) => {
  const category = CATEGORIES_ID[categoryId];

  return category;
};
