export interface Product {
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
}

export interface ProductsDataPage {
  list: Product[];
  nextCursor: number;
}

export interface ProductsDataAllPages {
  pages: ProductsDataPage[];
  pageParams: number[];
}
