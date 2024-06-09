import { PRODUCT_MENU } from '@/components/Profile/constants/productMenu';

export interface ProductTypes {
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

export interface ProductCardProps {
  product: ProductTypes;
}

export type ProductMenuType = (typeof PRODUCT_MENU)[number];
