import { CompareChip, CompareColor } from '@/shared/ui/Chip/CompareChip';
import { Input } from '@/shared/ui/Input';
import { useEffect, useState } from 'react';

interface AutoData {
  nextCursor: number;
  list: {
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
  };
}

interface AutoCompleteProps {
  color?: string;
}

export const AutoComplete = ({ color }: AutoCompleteProps): JSX.Element => {
  const [keyword, setKeyword] = useState<string>('');
  const [keyItems, setKeyItems] = useState<AutoData[]>([]);
  const [isChip, setIsChip] = useState<string>('a');

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const fetchData = async (): Promise<AutoData[]> => {
    try {
      const res = await fetch('https://mogazoa-api.vercel.app/4-19/products');
      const data = await res.json();
      return data.slice(0, 100);
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  const updateData = async () => {
    const res = await fetchData();
    const filteredData = res
      .filter((item) =>
        item.list.name.toLowerCase().includes(keyword.toLowerCase()),
      )
      .slice(0, 10);
    setKeyItems(filteredData);
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
            {keyItems.map((search) => (
              <li key={search.list.id}>
                <button
                  type="button"
                  onClick={() => {
                    setKeyword(search.list.name);
                    setKeyItems([]);
                    setIsChip(keyword);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setKeyword(search.list.name);
                      setKeyItems([]);
                    }
                  }}
                >
                  {search.list.name}
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
