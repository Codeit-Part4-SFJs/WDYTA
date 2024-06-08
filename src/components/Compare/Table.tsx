import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { PRODUCT_ID_1_MOCK } from './mock/PRODUCT_ID_1_MOCK';
import { PRODUCT_ID_2_MOCK } from './mock/PRODUCT_ID_2_MOCK';
import { ComparisonResult } from './hooks/ComparisonResult';

interface TableProps {
  selectedSecondProductId: number;
  selectedFirstProductId: number;
}

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  favoriteCount: number;
  categoryId: number;
  createdAt: string;
  updatedAt: string;
  writerId: number;
  isFavorite: boolean;
  category: {
    id: number;
    name: string;
  };
  categoryMetric: {
    rating: number;
    favoriteCount: number;
    reviewCount: number;
  };
}

export const Table = ({
  selectedSecondProductId,
  selectedFirstProductId,
}: TableProps) => {
  // 받은 props는 api에서 productId로 사용하면 됨.
  const firstProduct: Product = PRODUCT_ID_1_MOCK;
  const secondProduct: Product = PRODUCT_ID_2_MOCK;

  console.log(selectedFirstProductId, selectedSecondProductId);

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <ComparisonResult
          firstProduct={{
            name: firstProduct.name,
            rating: firstProduct.categoryMetric.rating,
            reviewCount: firstProduct.categoryMetric.reviewCount,
            favoriteCount: firstProduct.categoryMetric.favoriteCount,
          }}
          secondProduct={{
            name: secondProduct.name,
            rating: secondProduct.categoryMetric.rating,
            reviewCount: secondProduct.categoryMetric.reviewCount,
            favoriteCount: secondProduct.categoryMetric.favoriteCount,
          }}
        />
        <div className="mt-10">
          <Button
            kind={ButtonKind.secondary}
            customSize=" mb-[60px] w-[180px] h-[60px] text-[12px] mobile:w-[120px]"
          >
            이 상품 보러 가기
          </Button>
        </div>
      </div>
    </div>
  );
};
