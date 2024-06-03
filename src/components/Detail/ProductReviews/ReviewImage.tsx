import { ImageComponent } from '@/shared/ui/Img';
import { ReviewImageProps } from '@/components/Detail/types';

export const ReviewImage = ({ src }: ReviewImageProps) => {
  return (
    <div className="overflow-hidden rounded-lg mobile:w-[60px] mobile:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] shrink-0">
      <ImageComponent src={src} type="review" alt="review-image" />
    </div>
  );
};
