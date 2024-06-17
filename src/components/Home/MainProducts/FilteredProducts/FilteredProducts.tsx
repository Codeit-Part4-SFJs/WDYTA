'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sort } from '@/shared/ui/Dropdown/Sort';
import ProductCard from '@/components/@common/ProductCard';
import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { homeProductOptions } from '@/app/[category]/homeQueryOptions';
import { convertIdToCategory } from '@/shared/@common/utils';
import { Loading } from '@/shared/ui/Icon';
import { HOME_SORT_OPTIONS } from '../../constants/HOME_SORT_OPTIONS';
import { SkeletonMainCard } from '../../skeletons/SkeletonMainCard';
import { Product } from '../../types/ProductType';

interface FilteredProductsProps {
  currentSearchWord: string;
  category: number;
  currentFilter: string | undefined;
}

export const FilteredProducts = ({
  currentSearchWord,
  category,
  currentFilter,
}: FilteredProductsProps) => {
  const {
    data: FilteredProductsData,
    fetchNextPage,
    isFetchingNextPage,
  } = useSuspenseInfiniteQuery(
    homeProductOptions(currentSearchWord, category, currentFilter),
  );

  const hasData = FilteredProductsData?.pages[0]?.list?.length;

  const router = useRouter();
  const handleSelect = (filter: string) => {
    const keywordParam = currentSearchWord
      ? `keyword=${currentSearchWord}&`
      : `keyword=_&`;
    if (category) {
      router.replace(
        `/${convertIdToCategory(category)}?${keywordParam}order=${filter}`,
        {
          scroll: false,
        },
      );
      return;
    }
    router.replace(`/no_category?${keywordParam}order=${filter}`, {
      scroll: false,
    });
  };

  const { ref: triggerRef, inView } = useInView();

  useEffect(() => {
    if (inView && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, isFetchingNextPage, inView]);

  return (
    <section>
      <h2 className="text-[24px] text-gray-F1 font-semibold mb-6">
        필터링된 상품
      </h2>
      <Sort
        defaultValue={currentFilter}
        options={HOME_SORT_OPTIONS}
        onSelect={handleSelect}
      />
      {hasData ? (
        FilteredProductsData?.pages?.map((page) => (
          <div
            key={page.nextCursor}
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {page.list.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {isFetchingNextPage && <SkeletonMainCard />}
            <div ref={triggerRef} />
          </div>
        ))
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="grid justify-center items-center h-[300px]">
            <Loading>결과가 없습니다.</Loading>
          </div>
        </div>
      )}
    </section>
  );
};
