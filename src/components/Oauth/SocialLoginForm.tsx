'use client';

import { FormValues } from '@/shared/@common/types/input';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { NicknameInput } from '@/shared/ui/Input/Nickname';
import { SubmitHandler, useForm } from 'react-hook-form';
import useSignUpMutation from './hooks/useSignUpMutation';

interface SocialLoginFormProps {
  provider: string;
  code: string;
}

const SocialLoginForm = ({ provider, code }: SocialLoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: 'onChange' });

  const signUpMutation = useSignUpMutation(provider);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const loginData = {
      nickname: data.nickname,
      redirectUri: `${process.env.NEXT_PUBLIC_FE_URL}/oauth/${provider}/register`,
      token: code,
    };

    signUpMutation.mutate(loginData);
  };

  return (
    <form
      className="flex flex-col gap-[60px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <NicknameInput register={register} errors={errors} />
      <Button
        type="submit"
        kind={ButtonKind.primary}
        customSize={`${!isValid ? 'cursor-not-allowed' : 'cursor-pointer'} mt-[20px] w-[335px] md:w-[440px] lg:w-[640px] h-[50px] md:h-[55px] lg:h-[65px]`}
        disabled={!isValid}
      >
        가입하기
      </Button>
    </form>
  );
};

export default SocialLoginForm;
