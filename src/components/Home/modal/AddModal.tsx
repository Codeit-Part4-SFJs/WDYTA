'use client';

import { useState, useEffect } from 'react';
import { useImageMutation } from '@/shared/@common/hooks';
import { FormValues } from '@/shared/@common/types/input';
import { handleDeleteButton, handleImageChange } from '@/shared/@common/utils';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { Dropdown, DropdownKind } from '@/shared/ui/Dropdown/Dropdown';
import { ProductInput } from '@/shared/ui/Input/product/ProductInput';
import HelperText from '@/shared/ui/Input/HelperText';
import { TextBoxInput } from '@/shared/ui/Input/TextBox';
import { ImageInput } from '@/shared/ui/Input/image';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useProductAddMutation } from '@/components/Home/hooks/useProductAddMutation';
import { useQueryClient } from '@tanstack/react-query';
import { GetCategoryOptions } from '../hooks/GetCategoryOptions';
import { LoadingSpinner } from './LoadingSpinner';

interface ProductModalProps {
  accessToken: string;
  title: string;
}

export const AddModal = ({ accessToken, title }: ProductModalProps) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
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
  const [isLoading, setIsLoading] = useState(false);

  // 카테고리 선택 드롭다운 옵션 API 연동하여 불러오기
  useEffect(() => {
    const loadOptions = async () => {
      const fetchedOptions = await GetCategoryOptions();
      setOptions(fetchedOptions);
    };

    loadOptions();
  }, []);

  const text = watch('textarea', '');
  const productNameInput = watch('productName');

  const queryClient = useQueryClient();

  const imageMutation = useImageMutation({ accessToken, setErrorMessage });

  // 카테고리 선택 핸들러
  const handleProductCategory = (productCategory: string) => {
    setCategory(productCategory);
  };

  const productCategoryId = Number(category);
  const addProductMutation = useProductAddMutation({
    accessToken,
    setErrorMessage,
    productCategoryId,
    queryClient,
  });

  const isDisabled =
    !category ||
    !file ||
    !productNameInput ||
    !text ||
    isSubmitting ||
    isLoading;

  // 저장하기 버튼 클릭 시
  const onSubmit: SubmitHandler<FormValues> = (productData) => {
    setIsLoading(true);
    if (!file) {
      setIsLoading(false);
      return;
    }

    imageMutation.mutate(file, {
      onSuccess: (data) => {
        try {
          addProductMutation.mutate({
            categoryId: Number(category),
            image: data.url,
            description: text,
            name: productData.productName,
          });
          setIsLoading(false);
        } catch (error) {
          setErrorMessage('상품 추가에 실패했습니다.');
          setIsLoading(false);
        }
      },
    });
  };

  return (
    <div>
      {isLoading && <LoadingSpinner />}
      <form
        autoComplete="off"
        className="flex flex-col gap-[40px] mobile:gap-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="text-gray-F1 text-xl lg:text-2xl font-semibold lg:leading-none">
          {title}
        </span>
        <div className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-5">
          <div className="flex mobile:flex-col-reverse gap-[10px] md:gap-[15px] lg:gap-5">
            <div className="flex flex-col">
              <ProductInput register={register} errors={errors} />
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
                handleImageChange({
                  event,
                  setFile,
                  setPreview,
                  setErrorMessage,
                })
              }
            />
          </div>
          <TextBoxInput
            register={register}
            text={text}
            placeholder="상품 설명을 입력해 주세요"
          />
          {errorMessage && <HelperText type="error">{errorMessage}</HelperText>}
        </div>
        <Button
          type="submit"
          kind={ButtonKind.primary}
          customSize="lg:text-lg w-[295px] md:w-[510px] lg:w-[540px] h-[50px] md:h-[55px] lg:h-[65px]"
          disabled={isDisabled}
        >
          저장하기
        </Button>
      </form>
    </div>
  );
};
