export interface ProductDetailData {
  id: number;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  writerId: number;
  description: string;
  category: {
    id: number;
    name: string;
  };
  isFavorite: boolean;
  favoriteCount: number;
  categoryMetric: {
    rating: number;
    reviewCount: number;
    favoriteCount: number;
  };
}

export interface TableProductProps {
  id: number;
  categoryId: number;
  name: string;
  rating: number;
  reviewCount: number;
  favoriteCount: number;
}

export interface ProductDetailProps {
  userId: number;
  productId: number;
  accessToken: string;
}

export interface ProductList {
  list: [
    {
      id: number;
      name: string;
      image: string;
      rating: number;
      reviewCount: number;
      categoryId: number;
      createdAt: string;
      updatedAt: string;
      writerId: number;
      favoriteCount: number;
    },
  ];
  nextCursor: number;
}

export interface AutoCompleteProduct {
  updatedAt: string;
  createdAt: string;
  writerId: number;
  categoryId: number;
  favoriteCount: number;
  reviewCount: number;
  rating: number;
  image: string;
  name: string;
  id: number;
}

export interface ComparingButtonProps {
  productId1: number | undefined;
  productId2: number | undefined;
  accessToken: string;
}
