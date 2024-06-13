import { FormValues } from '@/shared/@common/types/input';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { CategoryChip } from '@/shared/ui/Chip/CategoryChip';
import { Icon } from '@/shared/ui/Icon';
import { TextBoxInput } from '@/shared/ui/Input/TextBox';
import { ImageInput } from '@/shared/ui/Input/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const ReviewModal = () => {
  const { register, watch } = useForm<FormValues>({ mode: 'onChange' });

  const [rating, setRating] = useState(0);
  const [image, setImage] = useState('');

  const ratingColors = Array(5)
    .fill('fill-gray-6E')
    .map((color, index) => (rating > index ? 'fill-yellow' : 'fill-gray-6E'));

  const handleStarClick = (index: number) => {
    setRating(index);
  };

  const text = watch('textarea', '');

  const handleDeleteButton = () => {
    console.log('이미지 인풋 삭제');
    // TODO 진짜 작동하게 할 예정임
  };

  const handleImageUpload = () => {
    // TODO 진짜 작동하게 할 거임
    setImage('');
  };

  return (
    <form className="border border-white rounded-3xl flex flex-col gap-[40px] mobile:gap-5 w-[335px] md:w-[590px] lg:w-[620px] h-[518px] md:h-[632px] lg:h-[698px] pt-[40px] p-5 md:p-[40px] lg:pt-[60px] lg:p-[40px]">
      <div className="flex flex-col gap-[10px]">
        <CategoryChip categoryID={7} />
        <span className="text-gray-F1 text-xl lg:text-2xl font-semibold lg:leading-none">
          Sony WH-1000XM3
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
        <ImageInput
          image={image}
          handleDeleteButton={handleDeleteButton}
          handleImageUpload={handleImageUpload}
        />
      </div>
      <Button
        kind={ButtonKind.primary}
        customSize="lg:text-lg w-[295px] md:w-[510px] lg:w-[540px] h-[50px] md:h-[55px] lg:h-[65px]"
      >
        작성하기
      </Button>
    </form>
  );
};
