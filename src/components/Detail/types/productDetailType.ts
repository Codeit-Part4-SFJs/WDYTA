export interface ProductDetailProps {
  userId: number;
  productId: number;
  accessToken: string;
}

export interface FavoriteButtonProps {
  productId: number;
  accessToken: string;
  isFavorite: boolean;
}
