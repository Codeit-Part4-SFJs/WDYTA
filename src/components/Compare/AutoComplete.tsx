import { getProductList } from '@/shared/@common/apis/product';
import { CompareChip, CompareColor } from '@/shared/ui/Chip/CompareChip';
import { Input } from '@/shared/ui/Input';
import { useEffect, useState } from 'react';
import { PRODUCT_LIST_MOCK } from './mock/PRODUCT_LIST_MOCK';

interface Product {
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

interface AutoCompleteProps {
  color?: string;
  onSelectProduct: (id: number) => void;
  selectedProduct?: string;
}

export const AutoComplete = ({
  color,
  onSelectProduct,
  selectedProduct,
}: AutoCompleteProps): JSX.Element => {
  const [keyword, setKeyword] = useState<string>('');
  const [keyItems, setKeyItems] = useState<Product[]>([]);
  const [isChip, setIsChip] = useState<string | undefined>(selectedProduct);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [listOpen, setListOpen] = useState<boolean>(false);

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const updateData = async () => {
    setLoading(true);
    setError(null);
    try {
      // const response = await getProductList();
      // const products: Product[] = await response.json();
      const products = PRODUCT_LIST_MOCK;
      const filteredData = products.list
        .filter((product: Product) =>
          product.name.toLowerCase().includes(keyword.toLowerCase()),
        )
        .slice(0, 10);
      setKeyItems(filteredData);
    } catch (error) {
      setError('Failed to fetch product list.');
    } finally {
      setLoading(false);
    }
  };

  console.log(isChip);

  useEffect(() => {
    setIsChip(selectedProduct);
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) {
        updateData();
        setListOpen(true);
      } else {
        setKeyItems([]);
        setListOpen(false);
      }
    }, 200);
    return () => clearTimeout(debounce);
  }, [keyword]);

  const handleInputBlur = () => {
    setTimeout(() => {
      setListOpen(false);
    }, 200);
  };

  const handleItemClick = (product: Product) => {
    setKeyword(product.name);
    onSelectProduct(product.id);
    setIsChip(product.name);
    setKeyItems([]);
    setListOpen(false);
  };

  return (
    <div>
      <div className="">
        {isChip ? (
          <div className="flex px-4 items-center w-[350px] h-[70px] md:h-[55px] md:w-[240px] mobile:w-[335px] mobile:h-[55px] rounded-lg border border-solid bg-black-25 text-gray-F1 text-sm lg:text-base placeholder-gray-6E focus:outline-none border-gray-35">
            <CompareChip
              productName={isChip}
              color={color ? CompareColor.GREEN : CompareColor.PINK}
              onDelete={() => setIsChip('')}
            />
          </div>
        ) : (
          <Input
            inputSize="xsmall"
            value={keyword}
            onChange={onChangeData}
            onBlur={handleInputBlur}
          />
        )}
      </div>
      {keyItems.length > 0 && keyword && listOpen && (
        <div className="mt-2">
          <ul className="flex w-[350px] p-[10px] flex-col items-start gap-[5px] bg-black-25 border border-solid border-gray-35 rounded-lg">
            {keyItems.map((product) => (
              <li
                className="flex py-[6px] px-5 items-center gap-[10px] self-stretch rounded-md  text-white hover:bg-gray-35 cursor-pointer"
                key={product.id}
                onClick={() => {
                  handleItemClick(product);
                }}
              >
                {product.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

/*
  Chip 클릭 시 상품 페이지로 이동하기.
  Zustand로 비교하기에 해당되는 상품들 기록해놓기.
*/
