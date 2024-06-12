import { FormValues } from '@/shared/@common/types/input';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown';
import { Option } from '@/shared/ui/Dropdown/Sort';
import { TextBoxInput } from '@/shared/ui/Input/TextBox';
import { ImageInput } from '@/shared/ui/Input/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const dropdownOptions: Option[] = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
];

export const EditModal = () => {
  const { register, watch } = useForm<FormValues>({ mode: 'onChange' });

  const [image, setImage] = useState('');

  const text = watch('textarea', '');

  const handleProduct = (product: string) => {
    console.log(product);
  };

  const handleDeleteButton = () => {
    // TODO 기능 정상 작동하게 할거임
    console.log('하하');
  };

  const handleImageUpload = () => {
    setImage('');
  };

  return (
    <form className="border border-white rounded-3xl flex flex-col gap-[40px] mobile:gap-5 w-[335px] md:w-[590px] lg:w-[620px] h-[578px] md:h-[573px] lg:h-[614px] pt-[40px] p-5 md:p-[40px] lg:pt-[60px] lg:p-[40px]">
      <span className="text-gray-F1 text-xl lg:text-2xl font-semibold lg:leading-none">
        상품 편집
      </span>
      <div className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-5">
        <div className="flex mobile:flex-col-reverse gap-[10px] md:gap-[15px] lg:gap-5">
          <div className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-5">
            <Dropdown
              options={dropdownOptions}
              onSelect={handleProduct}
              placeholder="상품명 (상품 등록 여부를 확인해 주세요)"
            />
            <Dropdown
              options={dropdownOptions}
              onSelect={handleProduct}
              placeholder="카테고리 선택"
            />
          </div>
          <ImageInput
            image={image}
            handleDeleteButton={handleDeleteButton}
            handleImageUpload={handleImageUpload}
          />
        </div>
        <TextBoxInput
          register={register}
          text={text}
          placeholder="상품 설명을 입력해 주세요"
        />
      </div>
      <Button
        kind={ButtonKind.primary}
        customSize="lg:text-lg w-[295px] md:w-[510px] lg:w-[540px] h-[50px] md:h-[55px] lg:h-[65px]"
      >
        저장하기
      </Button>
    </form>
  );
};
