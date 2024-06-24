'use client';

import { Icon } from '@/shared/ui/Icon';
import { useRef, useState, PropsWithChildren } from 'react';
import { useClose } from '@/shared/@common/hooks';
import { Option, SortProps } from '@/shared/ui/Dropdown/Sort';

export const MenuDropdown = ({
  children,
  options,
  onSelect,
}: PropsWithChildren<SortProps>) => {
  const sortClickRef = useRef<HTMLDivElement>(null);
  const [isToggled, setIsToggled] = useState(false);
  const handleToggleSort = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setIsToggled(!isToggled);
  };

  const handleSelectOption = (option: Option) => {
    onSelect(option.label);
    setIsToggled(false);
  };

  const handleClose = () => {
    setIsToggled(false);
  };

  useClose(isToggled, handleClose, sortClickRef);

  return (
    <div className="relative w-[160px] md:w-[140px]" ref={sortClickRef}>
      <div
        role="button"
        tabIndex={0}
        className={`flex flex-col items-center justify-between bg-transparent ${isToggled ? 'text-white' : ' text-gray-6E'}`}
        onClick={handleToggleSort}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleToggleSort(e);
          }
        }}
      >
        <div className="flex justify-between items-center self-stretch">
          <p className="text-white text-lg">{children}</p>

          <Icon
            name={isToggled ? 'DropDownIcon' : 'DropUpIcon'}
            className="w-6 mobile:w-5 text-gray-9F"
          />
        </div>
      </div>
      {isToggled && (
        <div className="absolute z-20 top-[calc(100%+10px)] flex w-[160px] md:w-[140px] p-[10px] flex-col items-start gap-[5px] rounded-lg border border-solid border-gray-35 bg-black-25">
          {options.map((option) => (
            <div
              role="button"
              tabIndex={0}
              className="flex px-[12px] py-[6px] items-center gap-[10px] self-stretch rounded-md bg-black-25 text-gray-6E hover:text-white hover:bg-gray-35"
              key={option.value}
              onClick={() => handleSelectOption(option)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelectOption(option);
                }
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
