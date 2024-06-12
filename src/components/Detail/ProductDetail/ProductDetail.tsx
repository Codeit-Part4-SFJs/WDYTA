'use client';

import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { CategoryChip } from '@/shared/ui/Chip/CategoryChip';
import { ImageComponent } from '@/shared/ui/Img';
import { FavoriteButton } from '@/components/Detail/ProductDetail/FavoriteButton';
import { ShareButtons } from '@/components/Detail/ProductDetail/ShareButtons';
import { ProductDetailProps } from '@/components/Detail/types';
import { useSuspenseQuery } from '@tanstack/react-query';
import { productOptions } from '@/app/[category]/[product]/queryOptions';
import { useRouter } from 'next/navigation';

export const ProductDetail = ({
  userId,
  productId,
  accessToken,
}: ProductDetailProps) => {
  const { data: productDetailData } = useSuspenseQuery(
    productOptions(productId, accessToken),
  );

  const MY_PRODUCT = productDetailData.writerId === userId;

  const router = useRouter();

  const handleCompareButtonClick = () => {
    router.push(`/compare/${productId}`);
  };

  return (
    <div className="mobile:mt-[30px] md:mt-[44px] lg:mt-[64px] lg:mb-[20px] flex mobile:flex-col justify-center items-center md:items-start lg:items-start gap-[20px] lg:gap-[40px]">
      <div className="flex justify-center items-center">
        <div className="shrink-0 overflow-hidden rounded-lg mobile:w-[335px] mobile:h-[236px] md:w-[280px] md:h-[197px] lg:w-[355px] lg:h-[250px]">
          <ImageComponent
            src={productDetailData.image}
            type="detail"
            alt="product-detail-image"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[20px] md:gap-[50px] lg:gap-[50px]">
          <div className="flex flex-col gap-[10px]">
            <CategoryChip categoryID={productDetailData.categoryId} />
            <div className="mobile:relative flex justify-between items-center">
              <div className="flex gap-[15px] mobile:justify-between mobile:w-full">
                <div className="text-gray-F1 not-italic font-normal mobile:leading-7 md:leading-normal lg:leading-normal text-xl lg:text-2xl">
                  {productDetailData.name}
                </div>
                <FavoriteButton
                  productId={productId}
                  accessToken={accessToken}
                  isFavorite={productDetailData.isFavorite}
                />
              </div>
              <ShareButtons productName={productDetailData.name} />
            </div>
          </div>
          <div className="text-gray-F1 not-italic font-semibold mobile:leading-5 md:leading-5 lg:leading-[22px] text-sm lg:text-base">
            {productDetailData.description}
          </div>
        </div>
        <div className="w-full flex gap-[15px] mobile:flex-col justify-center items-center">
          <Button
            customSize={`${
              MY_PRODUCT ? 'flex-1' : 'flex-[2_2_0%]'
            } w-full p-[15px]`}
            kind={ButtonKind.primary}
          >
            리뷰 작성하기
          </Button>
          <Button
            onClick={handleCompareButtonClick}
            customSize="flex-1 w-full p-[15px]"
            kind={ButtonKind.secondary}
          >
            비교하기
          </Button>
          {MY_PRODUCT && (
            <Button
              customSize="flex-1 w-full p-[15px]"
              kind={ButtonKind.tertiary}
            >
              편집하기
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
