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
import { SideMenuOpenButton } from '@/shared/ui/Menu/SideMenu/SideMenuOpenButton';
import { HOME_SORT_OPTIONS } from '../../constants/HOME_SORT_OPTIONS';
import { SkeletonMainCard } from '../../skeletons/SkeletonMainCard';
import { Product } from '../../types/ProductType';
import { FilteredTitle } from './FilteredTitle';

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
    <section className="mb-20 mobile:min-h-[70vh] md:min-h-[90vh] w-full">
      <div className="mobile:mb-4 md:flex md:items-center md:place-content-between md:mb-6 lg:flex lg:items-center lg:place-content-between lg:mb-6">
        <FilteredTitle
          currentSearchWord={currentSearchWord}
          category={category}
        />
        <div className="mobile:flex mobile:items-center mobile:place-content-between">
          <div className="mobile:relative">
            <SideMenuOpenButton currentCategoryId={category} />
          </div>
          <Sort
            defaultValue={currentFilter}
            options={HOME_SORT_OPTIONS}
            onSelect={handleSelect}
          />
        </div>
      </div>
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
        <div className="mobile:min-h-[60vh] md:min-h-[65vh] lg:min-h-[50vh] w-full flex justify-center items-center">
          <Loading>결과가 없습니다.</Loading>
        </div>
      )}
    </section>
  );
};
