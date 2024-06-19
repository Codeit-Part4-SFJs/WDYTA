'use client';

import ProductCard from '@/components/@common/ProductCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ratingDescProductOptions } from '@/app/[category]/homeQueryOptions';

export const RatingDescProducts = () => {
  const { data: ratingDescProductsData } = useSuspenseQuery(
    ratingDescProductOptions(),
  );
  return (
    <section>
      <h2 className="text-[24px] text-gray-F1 font-semibold mb-6">
        별점이 높은 상품
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {ratingDescProductsData
          ?.slice(0, 6)
          .map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
};
