import { useRef, useState, PropsWithChildren } from 'react';
import { Icon } from '@/shared/ui/Icon';
import { useClose } from '@/shared/@common/hooks';

export interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: Option[];
  placeholder?: string;
  onSelect: (value: string) => void;
  kind: DropdownKind;
}

export enum DropdownKind {
  normal = 'normal',
  modal = 'modal',
}

export const DropdownStyleByKind = {
  [DropdownKind.normal]: {
    div: 'w-[400px] md:w-[360px] mobile:w-[335px]',
    p: 'text-base',
  },
  [DropdownKind.modal]: {
    div: 'w-[360px] mobile:w-[295px]',
    p: 'text-sm',
  },
};

export const Dropdown = ({
  children,
  options,
  onSelect,
  kind,
  placeholder = '선택',
}: PropsWithChildren<DropdownProps>) => {
  const dropDownClickRef = useRef<HTMLDivElement>(null);
  const [isToggled, setIsToggled] = useState(false);
  const defaultOption =
    options.find((option) => option.value === placeholder) || null;
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleToggleDropdown = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.stopPropagation();
    setIsToggled((prev) => !prev);
  };

  const handleClose = () => {
    setIsToggled(false);
  };

  const handleSelectOption = (option: Option) => {
    setSelectedOption(option);
    onSelect(option.value);
    setIsToggled(false);
  };

  useClose(isToggled, handleClose, dropDownClickRef);

  return (
    <div
      className={`relative ${DropdownStyleByKind[kind].div}`}
      ref={dropDownClickRef}
    >
      <div
        role="button"
        tabIndex={0}
        className={`flex cursor-pointer py-[23px] md:py-[17px] mobile:py-[17px] md:h-[60px] mobile:h-[55px] px-5 flex-col items-start gap-[10px] rounded-lg border border-solid border-gray-35 bg-black-25 ${isToggled ? 'border-linear-gradients-black-25 text-white' : 'border-gray-35 text-gray-6E'}`}
        onClick={handleToggleDropdown}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleToggleDropdown(e);
          }
        }}
      >
        <div className="flex justify-between items-center self-stretch">
          <p
            className={`${DropdownStyleByKind[kind].p} text-gray-6E active:text-white`}
          >
            {children}
          </p>
          <button type="button" className=" w-full flex ">
            {selectedOption?.label ?? placeholder}
          </button>
          <Icon
            name={isToggled ? 'DropUpIcon' : 'DropDownIcon'}
            className="w-6"
          />
        </div>
      </div>
      {isToggled && (
        <div className="absolute z-20 top-[100%] flex w-[400px] md:w-[360px] mobile:w-[335px] p-[10px] flex-col items-start gap-[5px] rounded-lg border border-solid border-gray-35 bg-black-25">
          {options.map((option) => (
            <div
              role="button"
              tabIndex={0}
              className="flex px-5 py-[6px] items-center gap-[10px] self-stretch rounded-md bg-black-25 text-gray-6E hover:text-white hover:bg-gray-35"
              key={option.value}
              onClick={() => {
                handleSelectOption(option);
              }}
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
