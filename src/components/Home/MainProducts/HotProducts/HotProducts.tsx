'use client';

import { SideMenuOpenButton } from '@/shared/ui/Menu/SideMenu/SideMenuOpenButton';
import ProductCard from '@/components/@common/ProductCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { hotProductOptions } from '@/app/[category]/homeQueryOptions';

export const HotProducts = () => {
  const { data: hotProductsData } = useSuspenseQuery(hotProductOptions());

  return (
    <section className="mb-20">
      <div className="mobile:flex mobile:place-content-between">
        <h2 className="text-[24px] text-gray-F1 font-semibold mb-6">
          지금 핫한 상품 <span className="text-main-blue">TOP 6</span>
        </h2>
        <div className="mobile:relative">
          <SideMenuOpenButton />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {hotProductsData
          ?.slice(0, 6)
          .map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
};
