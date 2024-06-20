const CATEGORIES: { [key: string]: number } = {
  no_category: 0,
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

export const convertCategoryToId = (category: string) => {
  const categoryId = CATEGORIES[category];

  return categoryId;
};
