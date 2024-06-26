import { convertIdToCategory, formatCount } from '@/shared/@common/utils';
import { Icon } from '@/shared/ui/Icon';
import { ImageComponent } from '@/shared/ui/Img';
import Link from 'next/link';
import { ProductTypes } from '@/components/Profile/types/productType';

const ProductCard = ({ product }: { product: ProductTypes }) => {
  const { id, categoryId, image, name, reviewCount, rating, favoriteCount } =
    product;
  return (
    <Link href={`/${convertIdToCategory(categoryId)}/${id}`}>
      <div className="flex flex-col items-center justify-start pt-[10px] lg:pb-[20px] md:pb-[15px] mobile:pb-[10px] px-[10px] h-full mobile:w-full lg:max-w-[300px] mobile:gap-[10px] md:gap-[20px] gap-[25px] rounded-lg border-2 hover:border-main-blue border-gray-35 bg-gray-25">
        <ImageComponent type="product" src={image} alt="이미지" />

        <div className="w-full flex flex-col gap-[10px] mobile:gap-[5px] lg:px-[20px] md:px-[16px] mobile:px-[10px]">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-F1 truncate">
            {name}
          </p>

          <div className="flex justify-between flex-wrap gap-x-2 gap-y-2 mobile:flex-col mobile:gap-[5px] mobile:text-[12px] md:text-[14px] lg:text-[16px] text-gray-6E">
            <div className="flex items-center gap-[15px]">
              <p>리뷰 {formatCount(reviewCount)}</p>
              <p>찜 {formatCount(favoriteCount)}</p>
            </div>

            <div className="flex items-center gap-[2px]">
              <Icon
                name="StarIcon"
                className="w-[12px] h-[12px] md:w-[15px] md:h-[15px] lg:w-[16px] lg:h-[16px] fill-yellow"
              />
              <p className="leading-none text-gray-9F">
                {Math.round(rating * 100) / 100}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
