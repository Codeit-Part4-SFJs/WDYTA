'use client';

import { useImageMutation } from '@/shared/@common/hooks';
import { FormValues } from '@/shared/@common/types/input';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { CategoryChip } from '@/shared/ui/Chip/CategoryChip';
import { Icon } from '@/shared/ui/Icon';
import HelperText from '@/shared/ui/Input/HelperText';
import { TextBoxInput } from '@/shared/ui/Input/TextBox';
import { ImageInput } from '@/shared/ui/Input/image';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { useCreateReviewMutation } from '../ProductReviews/hooks/useCreateReviewMutation';

interface ReviewModalProps {
  accessToken: string;
}

const MAX_SIZE = 5 * 1024 * 1024;

export const ReviewModal = ({ accessToken }: ReviewModalProps) => {
  const { register, watch, handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
  });

  const [rating, setRating] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState('');

  const params = useSearchParams();
  const productId = parseInt(params.get('product') as string, 10);
  const categoryId = parseInt(params.get('category') as string, 10);
  const productName = params.get('name') || '';
  const currentFilter = params.get('filter') || '';

  const ratingColors = Array(5)
    .fill('fill-gray-6E')
    .map((color, index) => (rating > index ? 'fill-yellow' : 'fill-gray-6E'));

  const handleStarClick = (index: number) => {
    setRating(index);
  };

  const text = watch('textarea', '');

  const queryClient = useQueryClient();

  const imageMutation = useImageMutation({ accessToken, setErrorMessage });
  const createReviewMutation = useCreateReviewMutation({
    accessToken,
    setErrorMessage,
    queryClient,
    productId,
    currentFilter,
  });

  const handleDeleteButton = (index: number) => {
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFiles = Array.from(event.target.files).slice(
        0,
        3 - files.length,
      );
      const validFiles = newFiles
        .filter((file) => {
          if (file.size > MAX_SIZE) {
            alert('이미지 파일의 최대 용량은 5MB입니다.');
            return false;
          }
          return true;
        })
        .map((file) => {
          const newFileName = Math.random().toString(36).substring(2, 8);
          return new File([file], newFileName, { type: file.type });
        });

      if (validFiles.length > 0) {
        setFiles((prevFiles) => [...prevFiles, ...validFiles]);

        const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
        setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
      }
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async () => {
    if (rating === 0) {
      setErrorMessage('별점을 선택해 주세요');
      return;
    }

    if (text.trim() === '') {
      setErrorMessage('리뷰 내용을 작성해 주세요');
      return;
    }

    if (files.length === 0) {
      setErrorMessage('최소한 한 개의 이미지를 업로드해 주세요');
      return;
    }

    const promises = files.map((file) => {
      return new Promise<string>((resolve, reject) => {
        const formData = new FormData();
        formData.append('image', file);

        imageMutation
          .mutateAsync(file)
          .then((data) => resolve(data.url))
          .catch(() => reject(new Error('Image upload failed')));
      });
    });

    try {
      const urls = await Promise.all(promises);
      createReviewMutation.mutate({
        productId,
        images: urls,
        content: text,
        rating,
      });
    } catch (error) {
      setErrorMessage('이미지 업로드 중 오류가 발생했습니다');
    }
  };

  return (
    <form
      className="flex flex-col gap-[40px] mobile:gap-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-[10px]">
        <CategoryChip categoryID={categoryId} />
        <span className="text-gray-F1 text-xl lg:text-2xl font-semibold lg:leading-none">
          {productName}
        </span>
      </div>
      <div className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-5">
        <div className="flex items-center gap-[15px] lg:gap-5">
          <p className="text-gray-6E text-sm lg:text-base">별점</p>
          <div
            className="flex gap-[2px] lg:gap-[5px]"
            role="slider"
            tabIndex={0}
            aria-valuenow={rating}
            aria-valuemin={1}
            aria-valuemax={5}
          >
            {ratingColors.map((color, index) => (
              <Icon
                key={Math.random()}
                name="StarIcon"
                className={`w-8 h-8 mobile:w-7 mobile:h-7 ${color}`}
                onClick={() => handleStarClick(index + 1)}
              />
            ))}
          </div>
        </div>
        <TextBoxInput
          register={register}
          text={text}
          placeholder="리뷰를 작성해 주세요"
        />
        <div className="flex mobile:w-[315px] gap-[10px] md:gap-[15px] lg:gap-5 overflow-x-auto scrollbar-hide">
          {previews.length < 3 && (
            <ImageInput previewImage="" handleImageChange={handleImageChange} />
          )}
          {previews.map((preview, index) => (
            <ImageInput
              key={Math.random()}
              previewImage={preview}
              handleDeleteButton={() => handleDeleteButton(index)}
            />
          ))}
        </div>
        {errorMessage && <HelperText type="error">{errorMessage}</HelperText>}
      </div>
      <Button
        type="submit"
        kind={ButtonKind.primary}
        customSize="lg:text-lg w-[295px] md:w-[510px] lg:w-[540px] h-[50px] md:h-[55px] lg:h-[65px]"
      >
        작성하기
      </Button>
    </form>
  );
};
