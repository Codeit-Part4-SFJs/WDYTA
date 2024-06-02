import { ProductReviews } from '@/components/Detail/ProductReviews';
import { ProductStatistics } from '@/components/Detail/ProductStatistics';
import { ProductDetail } from '@/components/Detail/ProductDetail';
import { Floating } from '@/shared/ui/Button/Floating';
import {
  SkeletonProductDetail,
  SkeletonProductReviews,
  SkeletonProductStatistics,
} from '@/components/Detail/skeletons';

const Detail = () => {
  return (
    <div className="lg:mx-auto lg:max-w-[940px] flex flex-col gap-[60px]">
      <ProductDetail />
      <ProductStatistics />
      <ProductReviews />
      <Floating />
      <SkeletonProductDetail />
      <SkeletonProductStatistics />
      <SkeletonProductReviews />
      <SkeletonProductReviews />
      <SkeletonProductReviews />
      <SkeletonProductReviews />
    </div>
  );
};

export default Detail;
