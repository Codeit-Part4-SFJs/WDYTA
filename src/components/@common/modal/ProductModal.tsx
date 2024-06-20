'use client';

import { useImageMutation } from '@/shared/@common/hooks';
import { FormValues } from '@/shared/@common/types/input';
import { handleDeleteButton, handleImageChange } from '@/shared/@common/utils';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { Dropdown, DropdownKind } from '@/shared/ui/Dropdown/Dropdown';
import { Option } from '@/shared/ui/Dropdown/Sort';
import { Input } from '@/shared/ui/Input';
import HelperText from '@/shared/ui/Input/HelperText';
import { TextBoxInput } from '@/shared/ui/Input/TextBox';
import { ImageInput } from '@/shared/ui/Input/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const dropdownOptions: Option[] = [
  { value: 'option1', label: '옵션 1' },
  { value: 'option2', label: '옵션 2' },
  { value: 'option3', label: '옵션 3' },
  { value: 'option4', label: '옵션 4' },
];

interface ProductModalProps {
  accessToken: string;
  title: string;
}

export const ProductModal = ({ accessToken, title }: ProductModalProps) => {
  const { register, watch, handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
  });

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const text = watch('textarea', '');

  const imageMutation = useImageMutation({ accessToken, setErrorMessage });

  const handleProduct = (product: string) => {
    console.log(product);
  };

  const onSubmit: SubmitHandler<FormValues> = () => {
    if (!file) return;

    imageMutation.mutate(file, {
      onSuccess: (data) => {
        console.log(data.url);
        // 이 부분이 세 곳이 다 다르게 작동,,
      },
    });
  };

  return (
    <form
      className="flex flex-col gap-[40px] mobile:gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-gray-F1 text-xl lg:text-2xl font-semibold lg:leading-none">
        {title}
      </span>
      <div className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-5">
        <div className="flex mobile:flex-col-reverse gap-[10px] md:gap-[15px] lg:gap-5">
          <div className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-5">
            <Input
              inputSize="small"
              placeholder="상품명 (상품 등록 여부를 확인해 주세요)"
            />
            <Dropdown
              options={dropdownOptions}
              onSelect={handleProduct}
              placeholder="카테고리 선택"
              kind={DropdownKind.modal}
            />
          </div>
          <ImageInput
            previewImage={preview}
            handleDeleteButton={() => handleDeleteButton({ setPreview })}
            handleImageChange={(event) =>
              handleImageChange({ event, setFile, setPreview })
            }
          />
          {errorMessage && (
            <HelperText type="error">이미지를 다시 선택해주세요</HelperText>
          )}
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
