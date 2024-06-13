import ProductCard from '@/components/@common/ProductCard';
import { HOME_PRODUCT_LIST_MOCK } from '../mock/HOME_PRODUCT_LIST_MOCK';

export const MainProducts = () => {
  // API 연동하면서 데이터를 가져오는 부분 (추후 실제 연동하면서 수정 예정)
  const productData = HOME_PRODUCT_LIST_MOCK;

  const hotProductData = [...productData]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 6);

  const popularProductData = [...productData].sort(
    (a, b) => b.rating - a.rating,
  );

  return (
    <main className="md:col-span-3 lg:col-span-7 p-4 lg:my-14 lg:mr-12 lg:flex-auto">
      <section className="mb-20">
        <h2 className="text-[24px] text-gray-F1 font-semibold mb-6">
          지금 핫한 상품 <span className="text-main-blue">TOP 6</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {hotProductData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-[24px] text-gray-F1 font-semibold mb-6">
          별점이 높은 상품
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {popularProductData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};
