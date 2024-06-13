import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { getDetailProduct } from '@/shared/@common/apis/product';
import { useEffect, useState } from 'react';
import { ComparisonResult } from './hooks/ComparisonResult';

interface TableProps {
  selectedSecondProductId: number;
  selectedFirstProductId: number;
  accessToken: string;
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
  accessToken,
}: TableProps) => {
  const initialProduct: Product = {
    id: 0,
    name: '',
    description: '',
    image: '',
    rating: 0,
    reviewCount: 0,
    favoriteCount: 0,
    categoryId: 0,
    createdAt: '',
    updatedAt: '',
    writerId: 0,
    isFavorite: false,
    category: {
      id: 0,
      name: '',
    },
    categoryMetric: {
      rating: 0,
      favoriteCount: 0,
      reviewCount: 0,
    },
  };

  // 받은 props는 api에서 productId로 사용하면 됨.
  const [firstProduct, setFirstProduct] = useState<Product>(initialProduct);
  const [secondProduct, setSecondProduct] = useState<Product>(initialProduct);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response1 = await getDetailProduct(
          selectedFirstProductId,
          accessToken,
        );
        const response2 = await getDetailProduct(
          selectedSecondProductId,
          accessToken,
        );
        const data1: Product = await response1.json();
        const data2: Product = await response2.json();
        setFirstProduct(data1);
        setSecondProduct(data2);
      } catch (error) {
        console.error('Failed to fetch product details:', error);
      }
    };

    fetchProducts();
  }, [selectedFirstProductId, selectedSecondProductId, accessToken]);

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
