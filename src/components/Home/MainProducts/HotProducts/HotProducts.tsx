'use client';

import ProductCard from '@/components/@common/ProductCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { hotProductOptions } from '@/app/[category]/homeQueryOptions';

export const HotProducts = () => {
  const { data: hotProductsData } = useSuspenseQuery(hotProductOptions());

  return (
    <section className="mb-20">
      <h2 className="text-[24px] text-gray-F1 font-semibold mb-6">
        지금 핫한 상품 <span className="text-main-blue">TOP 6</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {hotProductsData?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
