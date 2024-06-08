import { Loading } from '@/shared/ui/Icon';
import ProductCard from '@/components/@common/ProductCard';

export interface UserProductData {
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
export interface ProductListProps {
  productsList: UserProductData[];
  content: string;
}
export const ProductList = ({ productsList, content }: ProductListProps) => {
  return productsList?.length ? (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 mobile:grid-cols-2 gap-[20px] ">
      {productsList.map((product: UserProductData) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  ) : (
    <div className="mt-[50px] lg:mt-[100px]">
      <Loading>{content}</Loading>
    </div>
  );
};
