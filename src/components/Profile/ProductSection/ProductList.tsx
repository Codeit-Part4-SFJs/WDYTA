import { Loading } from '@/shared/ui/Icon';
import ProductCard from '@/components/@common/ProductCard';
import {
  ProductDataPage,
  ProductTypes,
} from '@/components/Profile/types/productType';

interface ProductListProps {
  productData: { pages: ProductDataPage[] };
  content: string;
}
export const ProductList = ({ productData, content }: ProductListProps) => {
  const hasProduct = productData.pages[0].list.length;
  return hasProduct ? (
    productData.pages.map((page) => (
      <div
        key={page.nextCursor}
        className="grid lg:grid-cols-3 md:grid-cols-2 mobile:grid-cols-2 gap-[20px] "
      >
        {page.list.map((product: ProductTypes) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    ))
  ) : (
    <div className="mt-[50px] lg:mt-[100px]">
      <Loading>{content}</Loading>
    </div>
  );
};
