import { getProductList } from '@/shared/@common/apis/product';
import { CompareChip, CompareColor } from '@/shared/ui/Chip/CompareChip';
import { Input } from '@/shared/ui/Input';
import { useEffect, useState } from 'react';

interface Product {
  categoryId: number;
  image: string;
  description: string;
  name: string;
  id: number;
}

interface AutoCompleteProps {
  color?: string;
  onSelectProduct: (id: number) => void;
}

export const AutoComplete = ({
  color,
  onSelectProduct,
}: AutoCompleteProps): JSX.Element => {
  const [keyword, setKeyword] = useState<string>('');
  const [keyItems, setKeyItems] = useState<Product[]>([]);
  const [isChip, setIsChip] = useState<string>('a');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const updateData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProductList();
      const products: Product[] = await response.json();
      const filteredData = products
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

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (keyword) updateData();
      else setKeyItems([]);
    }, 200);
    return () => clearTimeout(debounce);
  }, [keyword]);

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
          <Input inputSize="xsmall" value={keyword} onChange={onChangeData} />
        )}
      </div>
      {keyItems.length > 0 && keyword && (
        <div>
          <ul>
            {keyItems.map((product) => (
              <li key={product.id}>
                <button
                  type="button"
                  onClick={() => {
                    setKeyword(product.name);
                    setKeyItems([]);
                    setIsChip(keyword);
                    onSelectProduct(product.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setKeyword(product.name);
                      setKeyItems([]);
                    }
                  }}
                >
                  {product.name}
                </button>
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
