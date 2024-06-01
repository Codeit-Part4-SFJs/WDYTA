import { ProductReviews } from '@/components/Detail/ProductReviews';
import { ProductStatistics } from '@/components/Detail/ProductStatistics';
import { Floating } from '@/shared/ui/Button/Floating';

const Detail = () => {
  return (
    <div>
      {/* <ProductDetail /> */}
      <ProductStatistics />
      <ProductReviews />
      <Floating />
    </div>
  );
};

export default Detail;
