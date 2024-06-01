import { ProductReviews } from '@/components/Detail/ProductReviews';
import { ProductStatistics } from '@/components/Detail/ProductStatistics';
import { ProductDetail } from '@/components/Detail/ProductDetail';
import { Floating } from '@/shared/ui/Button/Floating';

const Detail = () => {
  return (
    <div className="lg:mx-auto lg:max-w-[940px] flex flex-col gap-[60px]">
      <ProductDetail />
      <ProductStatistics />
      <ProductReviews />
      <Floating />
    </div>
  );
};

export default Detail;
