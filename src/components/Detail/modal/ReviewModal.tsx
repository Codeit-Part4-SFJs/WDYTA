'use client';

import { postImage } from '@/shared/@common/apis';
import { FormValues } from '@/shared/@common/types/input';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { CategoryChip } from '@/shared/ui/Chip/CategoryChip';
import { Icon } from '@/shared/ui/Icon';
import HelperText from '@/shared/ui/Input/HelperText';
import { TextBoxInput } from '@/shared/ui/Input/TextBox';
import { ImageInput } from '@/shared/ui/Input/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface ReviewModalProps {
  accessToken: string;
  categoryId: number;
  name: string;
}

export const ReviewModal = ({
  accessToken,
  categoryId,
  name,
}: ReviewModalProps) => {
  const { register, watch, handleSubmit } = useForm<FormValues>({
    mode: 'onChange',
  });

  const [rating, setRating] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const ratingColors = Array(5)
    .fill('fill-gray-6E')
    .map((color, index) => (rating > index ? 'fill-yellow' : 'fill-gray-6E'));

  const handleStarClick = (index: number) => {
    setRating(index);
  };

  const text = watch('textarea', '');

  const handleDeleteButton = (index: number) => {
    setPreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFiles = Array.from(event.target.files).slice(
        0,
        3 - files.length,
      );
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);

      const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
      setPreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async () => {
    if (files.length === 0) return;

    for (let i = 0; i < files.length; i += 1) {
      const formData = new FormData();
      formData.append('image', files[i]);

      try {
        // eslint-disable-next-line no-await-in-loop
        const response = await postImage(accessToken, formData);

        if (response.ok) {
          // eslint-disable-next-line no-await-in-loop
          const result = await response.json();
          console.log('File uploaded successfully:', result);
        } else {
          console.error('Error uploading file:', response.statusText);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
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
          {name}
        </span>
      </div>
      <div className="flex flex-col gap-[10px] md:gap-[15px] lg:gap-5">
        <div className="flex items-center gap-[15px] lg:gap-5">
          <p className="text-gray-6E text-sm lg:text-base">별점</p>
          <div className="flex gap-[2px] lg:gap-[5px]">
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
        <div className="flex gap-[10px] md:gap-[15px] lg:gap-5 overflow-auto scrollbar-hide">
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
        <HelperText type="error">에러이다</HelperText>
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
