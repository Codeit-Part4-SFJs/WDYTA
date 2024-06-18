'use client';

import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { TextBoxInput } from '@/shared/ui/Input/TextBox';
import { ImageInput } from '@/shared/ui/Input/image';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '@/shared/ui/Input';
import { FormValues } from '@/shared/@common/types/input';
import HelperText from '@/shared/ui/Input/HelperText';
import useProfileEditMutation from '../hooks/useProfileEditMutation';

const EditModal = ({ accessToken }: { accessToken: string }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const text = watch('text', '');
  const nickname = watch('nickname', '');

  const [image, setImage] = useState('');

  const handleDeleteButton = () => {
    console.log('이미지 인풋 삭제');
  };

  const handleImageUpload = () => {
    setImage('');
  };

  const { mutate, error, isError } = useProfileEditMutation(accessToken);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const profileData = {
      description: data.textarea,
      nickname,
      image:
        'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/17/1710468437102/img',
    };
    mutate(profileData);
  };

  return (
    <form
      className="flex flex-col gap-[40px] mobile:gap-[20px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="lg:text-[24px] text-[20px] text-white">프로필 편집</h1>
      <div className="flex flex-col lg:gap-[20px] md:gap-[15px] mobile:gap-[10px]">
        <ImageInput
          image={image}
          handleDeleteButton={handleDeleteButton}
          handleImageUpload={handleImageUpload}
        />
        <Input
          id="nickname"
          inputSize="medium"
          placeholder="닉네임을 입력해 주세요"
          {...register('nickname', {
            required: '변경할 닉네임을 입력해주세요',
            maxLength: {
              value: 10,
              message: '닉네임은 10자 이하로 작성해주세요',
            },
          })}
          isError={!!errors.nickname}
        />
        {errors.nickname && (
          <HelperText type="error">{errors.nickname.message}</HelperText>
        )}
        {isError && <HelperText type="error">{error.message}</HelperText>}
        <TextBoxInput
          register={register}
          text={text}
          placeholder="본인을 소개해 주세요"
        />
      </div>
      <Button
        type="submit"
        kind={ButtonKind.primary}
        customSize="w-[540px] h-[65px] md:w-[510px] md:h-[55px] mobile:w-[295px] mobile:h-[50px] lg:text-[18px]"
      >
        저장하기
      </Button>
    </form>
  );
};

export default EditModal;
