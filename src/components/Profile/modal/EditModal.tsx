'use client';

import { FormValues } from '@/shared/@common/types/input';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input';
import { TextBoxInput } from '@/shared/ui/Input/TextBox';
import { ImageInput } from '@/shared/ui/Input/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const EditModal = () => {
  const { register, watch } = useForm<FormValues>({ mode: 'onChange' });
  const text = watch('textarea', '');
  const [image, setImage] = useState('');

  const handleDeleteButton = () => {
    console.log('이미지 인풋 삭제');
  };

  const handleImageUpload = () => {
    setImage('');
  };
  return (
    <form className="flex flex-col gap-[40px] mobile:gap-[20px]">
      <h1 className="lg:text-[24px] text-[20px] text-white">프로필 편집</h1>
      <div className="flex flex-col lg:gap-[20px] md:gap-[15px] mobile:gap-[10px]">
        <ImageInput
          image={image}
          handleDeleteButton={handleDeleteButton}
          handleImageUpload={handleImageUpload}
        />
        <Input inputSize="medium" placeholder="닉네임을 입력해 주세요" />
        <TextBoxInput
          register={register}
          text={text}
          placeholder="본인을 소개해 주세요"
        />
      </div>
      <Button
        kind={ButtonKind.primary}
        customSize="w-[540px] h-[65px] md:w-[510px] md:h-[55px] mobile:w-[295px] mobile:h-[50px] lg:text-[18px]"
      >
        저장하기
      </Button>
    </form>
  );
};

export default EditModal;
