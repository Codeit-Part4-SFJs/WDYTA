import { TAB_OPTIONS } from '@/components/Profile/constants/productMenu';

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
export interface ProductDataPage {
  list: ProductTypes[];
  nextCursor: number;
}
export type ProductMenuType = (typeof TAB_OPTIONS)[number]['label'];
