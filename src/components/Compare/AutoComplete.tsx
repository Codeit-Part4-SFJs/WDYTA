'use client';

import { CompareChip, CompareColor } from '@/shared/ui/Chip/CompareChip';
import { Input } from '@/shared/ui/Input';
import { useEffect, useState, useRef } from 'react';
import { getProductListKeyword } from '@/shared/@common/apis/product';
import { AutoCompleteProduct, ProductList } from './types';

export interface AutoCompleteProps {
  color?: string;
  onSelectProduct: (id: number) => void;
  selectedProduct?: string;
}

export const AutoComplete = ({
  color,
  onSelectProduct,
  selectedProduct,
}: AutoCompleteProps): JSX.Element => {
  const [keyword, setKeyword] = useState('');
  const [keyItems, setKeyItems] = useState<AutoCompleteProduct[]>([]);
  const [isChip, setIsChip] = useState<string | undefined>(selectedProduct);
  const [loading, setLoading] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const updateData = async () => {
    if (isChip) return;
    setLoading(true);

    try {
      const response = await getProductListKeyword(keyword);
      const products: ProductList = await response.json();
      const filteredData = products.list
        .filter((product: AutoCompleteProduct) => product.name)
        .slice(0, 5);
      setKeyItems(filteredData);
    } catch (error) {
      console.error('Failed to fetch product list.');
      console.log(loading);
    } finally {
      setLoading(false);
    }
  };

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

  const handleItemClick = (product: AutoCompleteProduct) => {
    setKeyword(product.name);
    onSelectProduct(product.id);
    setIsChip(product.name);
    setKeyItems([]);
    setListOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (listOpen) {
        if (e.key === 'ArrowDown' || e.key === 'Tab') {
          e.preventDefault();
          setHighlightedIndex((prevIndex) =>
            prevIndex < keyItems.length - 1 ? prevIndex + 1 : prevIndex,
          );
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          setHighlightedIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : prevIndex,
          );
        } else if (e.key === 'Enter' && highlightedIndex >= 0) {
          e.preventDefault();
          handleItemClick(keyItems[highlightedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [listOpen, keyItems, highlightedIndex]);

  const handleInputBlur = () => {
    setTimeout(() => {
      setListOpen(false);
    }, 200);
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
        <div className="mt-2" ref={dropdownRef}>
          <ul className="absolute flex w-[350px] md:w-[240px] mobile:w-[335px] p-[10px] flex-col items-start gap-[5px] bg-black-25 border border-solid border-gray-35 rounded-lg">
            {keyItems.map((product, index) => (
              <button
                type="button"
                className={`flex py-[6px] px-5 items-center gap-[10px] self-stretch rounded-md text-white hover:bg-gray-35 cursor-pointer ${
                  index === highlightedIndex ? 'bg-gray-35' : ''
                }`}
                key={product.id}
                onClick={() => handleItemClick(product)}
                onMouseEnter={() => setHighlightedIndex(index)}
              >
                {product.name}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
