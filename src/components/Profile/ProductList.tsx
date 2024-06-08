import { Loading } from '@/shared/ui/Icon';
import ProductCard from '@/components/@common/ProductCard';
import { ProductTypes } from '@/components/Profile/types/productType';

interface ProductListProps {
  productsList: ProductTypes[];
  content: string;
}
export const ProductList = ({ productsList, content }: ProductListProps) => {
  return productsList?.length ? (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 mobile:grid-cols-2 gap-[20px] ">
      {productsList.map((product: ProductTypes) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  ) : (
    <div className="mt-[50px] lg:mt-[100px]">
      <Loading>{content}</Loading>
    </div>
  );
};
