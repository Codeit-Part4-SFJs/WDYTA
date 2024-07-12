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

export interface ProductDetailProps {
  userId: number;
  productId: number;
  accessToken: string;
  currentFilter: string | undefined;
}

export interface FavoriteButtonProps {
  userId: number;
  productId: number;
  accessToken: string;
  isFavorite: boolean;
}
