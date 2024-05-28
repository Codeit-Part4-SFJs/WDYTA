import { Input } from '@/shared/ui/Input';
import { useEffect, useState } from 'react';

interface AutoDatas {
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

export const AutoComplete = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [keyItems, setKeyItems] = useState<AutoDatas[]>([]);

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const fetchData = () => {
    return fetch('mogazoa-api.vercel.app/4-19/products')
      .then((res) => res.json())
      .then((data) => data.slice(0, 100))
      .catch((error) => console.error('Error fetching data:', error));
  };

  const updateData = async () => {
    const res = await fetchData();
    const filteredData = res
      .filter((list: AutoDatas) =>
        list.list.name.toLowerCase().includes(keyword.toLowerCase()),
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
      <Input inputSize="xsmall" value={keyword} onChange={onChangeData} />
      {keyItems.length > 0 && keyword && (
        <div>
          <ul>
            {keyItems.map((search) => (
              <li key={search.list.name}>
                <button
                  type="button"
                  onClick={() => {
                    setKeyword(search.list.name);
                    setKeyItems([]);
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
