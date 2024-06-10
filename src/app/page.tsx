import { SideMenu } from '@/shared/ui/Menu/SideMenu';
import { Floating } from '@/shared/ui/Button/Floating';
import ProductCard from '@/components/@common/ProductCard';
import { RankingCard } from '@/components/Home/RankingCard/RankingCard';
import { HOME_PRODUCT_LIST_MOCK } from '@/components/Home/mock/HOME_PRODUCT_LIST_MOCK';
import { CATEGORY_LIST_MOCK } from '@/components/Home/mock/CATEGORY_LIST_MOCK';
import { RANKING_LIST_MOCK } from '@/components/Home/mock/RANKING_LIST_MOCK';

export default function Home() {
  // API 연동하면서 데이터를 가져오는 부분 (추후 실제 연동하면서 수정 예정)
  const productData = HOME_PRODUCT_LIST_MOCK;

  const hotProductData = [...productData]
    .sort((a, b) => b.favoriteCount - a.favoriteCount)
    .slice(0, 6);

  const popularProductData = [...productData].sort(
    (a, b) => b.rating - a.rating,
  );

  const rankingData = RANKING_LIST_MOCK;

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-4 lg:ml-44">
      <div className="md:col-span-1 lg:col-span-2">
        <SideMenu categories={CATEGORY_LIST_MOCK} />
      </div>
      <div className="flex flex-col-reverse lg:flex-row md:col-span-4 lg:col-span-10 lg:justify-center mobile:ml-2 md:mr-2 lg:mr-44">
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
        <aside className="md:col-span-1 lg:col-span-3 p-4 text-white">
          <h2 className="text-[16px] text-gray-F1 font-normal mb-4 lg:mb-8 md:mt-7 lg:mt-7">
            리뷰어 랭킹
          </h2>
          <ul className="flex flex-row lg:flex-col gap-5 lg:gap-1 overflow-hidden">
            {rankingData
              ?.slice(0, 6)
              .map((ranking, index) => (
                <RankingCard key={ranking.id} ranking={ranking} index={index} />
              ))}
          </ul>
        </aside>
      </div>
      <Floating />
    </div>
  );
}
