'use client';

import { useImageMutation } from '@/shared/@common/hooks';
import { FormValues } from '@/shared/@common/types/input';
import { handleDeleteButton, handleImageChange } from '@/shared/@common/utils';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { Dropdown, DropdownKind } from '@/shared/ui/Dropdown/Dropdown';
import { Input } from '@/shared/ui/Input';
import HelperText from '@/shared/ui/Input/HelperText';
import { TextBoxInput } from '@/shared/ui/Input/TextBox';
import { ImageInput } from '@/shared/ui/Input/image';
import { useState, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useProductAddMutation } from '@/components/Home/hooks/useProductAddMutation';
// import { useQueryClient } from '@tanstack/react-query';
import { CATEGORY_DROPDOWN_OPTIONS } from './constants/CATEGORY_DROPDOWN_OPTIONS';

interface ProductModalProps {
  accessToken: string;
  title: string;
}

export const ProductModal = ({ accessToken, title }: ProductModalProps) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );
  const [category, setCategory] = useState('');

  // 카테고리 선택 드롭다운 옵션 API 연동하여 불러오기
  useEffect(() => {
    const loadOptions = async () => {
      const fetchedOptions = await CATEGORY_DROPDOWN_OPTIONS();
      setOptions(fetchedOptions);
    };

    loadOptions();
  }, []);

  const text = watch('textarea', '');
  const nameInput = watch('productName', '');

  // const queryClient = useQueryClient();

  const imageMutation = useImageMutation({ accessToken, setErrorMessage });

  const addProductMutation = useProductAddMutation({
    accessToken,
    setErrorMessage,
  });

  // 카테고리 선택 핸들러
  const handleProductCategory = (productCategory: string) => {
    setCategory(productCategory);
    // console.log(typeof category); // 데이터 받을땐 String으로 받아야함
    // console.log(Number(category)); // 데이터 보낼땐 Number로 변환해서 보내야함
  };

  // const categoryId = Number(category);
  // console.log(categoryId);

  // useEffect(() => {
  //   console.log(Number(category)); // 상태가 업데이트된 후에 로그 출력
  // }, [category]);

  // 저장하기 버튼 클릭 시
  const onSubmit: SubmitHandler<FormValues> = (productData) => {
    if (!file) return;
    console.log(productData);

    imageMutation.mutate(file, {
      onSuccess: (data) => {
        // console.log(data);
        // 이 부분이 세 곳이 다 다르게 작동,,
        if (title === '상품 추가') {
          try {
            addProductMutation.mutate({
              categoryId: Number(category),
              image: data.url,
              description: text,
              name: nameInput,
            });
          } catch (error) {
            console.error('상품 추가에 실패했습니다.');
          }
        }
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
              id="productName"
              inputSize="small"
              type="text"
              placeholder="상품명 (상품 등록 여부를 확인해 주세요)"
              {...register('productName', {
                required: '상품명을 입력해주세요',
                maxLength: {
                  value: 20,
                  message: '상품명은 20자 이하로 작성해주세요',
                },
              })}
              isError={!!errors.productName}
            />
            <HelperText type={errors.productName ? 'error' : 'basic'}>
              {errors.productName
                ? errors.productName.message
                : '최대 20자 가능'}
            </HelperText>
            <Dropdown
              options={options}
              onSelect={handleProductCategory}
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
        </div>
        <TextBoxInput
          register={register}
          text={text}
          placeholder="상품 설명을 입력해 주세요"
        />
        {errorMessage && (
          <HelperText type="error">이미지를 다시 선택해주세요</HelperText>
        )}
      </div>
      <Button
        type="submit"
        kind={ButtonKind.primary}
        customSize="lg:text-lg w-[295px] md:w-[510px] lg:w-[540px] h-[50px] md:h-[55px] lg:h-[65px]"
      >
        저장하기
      </Button>
    </form>
  );
};
