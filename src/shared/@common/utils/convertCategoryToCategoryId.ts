const CATEGORIES: { [key: string]: number } = {
  music: 1,
  movie_drama: 2,
  lecture_book: 3,
  hotel: 4,
  furniture_interior: 5,
  restaurant: 6,
  devices: 7,
  cosmetics: 8,
  fashion_accessories: 9,
  app: 10,
};

export const convertCategoryToCategoryId = (category: string) => {
  const categoryId = CATEGORIES[category];

  return categoryId;
};
