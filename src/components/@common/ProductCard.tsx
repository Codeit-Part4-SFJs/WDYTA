import { Icon } from '@/shared/ui/Icon';
import { ImageComponent } from '@/shared/ui/Img';
import Link from 'next/link';

// 추후 이동
interface ProductTypes {
  updatedAt: string;
  createdAt: string;
  writerId: number;
  categoryId: number;
  favoriteCount: number;
  reviewCount: number;
  rating: number;
  image: string;
  name: string;
  id: number;
}

interface ProductCardProps {
  product: ProductTypes;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, image, name, reviewCount, rating, favoriteCount } = product;
  return (
    <Link href={`/detail/${id}`}>
      <div className="flex flex-col items-center lg:pt-[8px] lg:pb-[25px] md:pt-[10px]  md:pb-[20px] mobile:pt-[10px] mobile:pb-[10px] mobile:mobile:w-[160px] md:w-[247px] lg:w-[300px] mobile:gap-[10px] md:gap-[20px] gap-[25px] rounded-lg border border-solid border-gray-35 bg-gray-25">
        <ImageComponent type="product" src={image} alt="이미지" />

        <div className="w-full flex flex-col lg:gap-[10px] md:gap-[10px] mobile:gap-[5px] lg:px-[20px] md:px-[16.5px] mobile:px-[10px]">
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-gray-F1 truncate">
            {name}
          </p>

          <div className="flex justify-between mobile:flex-col mobile:gap-[5px] mobile:text-[12px] md:text-[14px] lg:text-[16px] text-gray-6E">
            <div className="flex items-center gap-[15px]">
              <p>리뷰 {reviewCount}</p>
              <p>찜 {favoriteCount}</p>
            </div>

            <div className="flex items-center gap-[2px]">
              <Icon
                name="StarIcon"
                className="mobile:w-[12px] mobile:h-[12px] md:w-[15px] md:h-[15px] lg:w-[16px] lg:h-[16px] fill-yellow"
              />
              <p className="text-gray-9F">{rating}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
