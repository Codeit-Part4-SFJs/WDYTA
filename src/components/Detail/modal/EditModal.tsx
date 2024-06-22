'use client';

import { FormValues } from '@/shared/@common/types/input';
import { Dropdown, DropdownKind } from '@/shared/ui/Dropdown/Dropdown';
import HelperText from '@/shared/ui/Input/HelperText';
import { TextBoxInput } from '@/shared/ui/Input/TextBox';
import { ImageInput } from '@/shared/ui/Input/image';
import { ProductInput } from '@/shared/ui/Input/product/ProductInput';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { handleDeleteButton, handleImageChange } from '@/shared/@common/utils';
import { useImageMutation } from '@/shared/@common/hooks';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { ProductCategoryEnum } from '@/shared/ui/Chip/types/categoryChipType';
import { useSearchParams } from 'next/navigation';
import { useQueryClient } from '@tanstack/react-query';
import { GetCategoryOptions } from '@/components/Home/hooks/GetCategoryOptions';
import { useEditProductMuation } from '../ProductDetail/hooks';

interface EditModalProps {
  accessToken: string;
}
export const EditModal = ({ accessToken }: EditModalProps) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const params = useSearchParams();
  const productId = parseInt(params?.get('productId') as string, 10);
  const categoryId = params?.get('category') || '';
  const productName = params?.get('productName') || '';
  const image = params?.get('image') || '';
  const currentFilter = params?.get('filter') || '';

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState(image);
  const [errorMessage, setErrorMessage] = useState('');
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );
  const [category, setCategory] = useState(categoryId);
  const [isPending, setIsPending] = useState(false);

  const text = watch('textarea', '');

  const queryClient = useQueryClient();

  const imageMutation = useImageMutation({ accessToken, setErrorMessage });
  const editProductMutation = useEditProductMuation({
    accessToken,
    setErrorMessage,
    productId,
    queryClient,
    currentFilter,
  });

  useEffect(() => {
    const loadOptions = async () => {
      const fetchedOptions = await GetCategoryOptions();
      setOptions(fetchedOptions);
    };

    loadOptions();
  }, []);

  const handleProductCategory = (productCategory: string) => {
    setCategory(productCategory);
  };

  const onSubmit: SubmitHandler<FormValues> = (productData) => {
    setIsPending(true);
    if (file) {
      imageMutation.mutate(file, {
        onSuccess: (data) => {
          editProductMutation.mutate({
            categoryId: Number(category),
            image: data.url,
            description: text,
            name: productData.productName,
          });
        },
      });
    } else {
      editProductMutation.mutate({
        categoryId: Number(category),
        image: preview,
        description: text,
        name: productData.productName,
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-[40px] mobile:gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-gray-F1 text-xl lg:text-2xl font-semibold lg:leading-none">
        상품 편집
      </span>
      <div className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-5">
        <div className="flex mobile:flex-col-reverse gap-[10px] md:gap-[15px] lg:gap-5">
          <div className="flex flex-col">
            <ProductInput
              register={register}
              errors={errors}
              productName={productName}
            />
            <Dropdown
              options={options}
              onSelect={handleProductCategory}
              kind={DropdownKind.modal}
              placeholder={ProductCategoryEnum[Number(categoryId)]}
            />
          </div>
          <ImageInput
            previewImage={preview}
            handleDeleteButton={() => handleDeleteButton({ setPreview })}
            handleImageChange={(event) =>
              handleImageChange({ event, setFile, setPreview, setErrorMessage })
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
        disabled={!text || isSubmitting || isPending}
      >
        저장하기
      </Button>
    </form>
  );
};
