'use client';

import { FormValues } from '@/shared/@common/types/input';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { EmailInput } from '@/shared/ui/Input/Email';
import { NicknameInput } from '@/shared/ui/Input/Nickname';
import { PasswordInput } from '@/shared/ui/Input/Password';
import { PasswordCheckInput } from '@/shared/ui/Input/PasswordCheck';
import { SubmitHandler, useForm } from 'react-hook-form';
import useRegisterMutation from './hooks/useRegisterMutation';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormValues>({ mode: 'onChange' });
  const { mutate, isPending } = useRegisterMutation(setError);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data);
  };

  const password = watch('password');

  const isButtonDisabled = !isValid || isSubmitting || isPending;

  return (
    <form
      autoComplete="off"
      className="flex flex-col gap-10 mobile:gap-[30px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <EmailInput register={register} errors={errors} />
      <NicknameInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <PasswordCheckInput
        register={register}
        errors={errors}
        password={password}
      />
      <Button
        type="submit"
        kind={ButtonKind.primary}
        customSize={`${isButtonDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} mt-[20px] mobile:mt-[126px] w-[335px] md:w-[440px] lg:w-[640px] h-[50px] md:h-[55px] lg:h-[65px]`}
        disabled={isButtonDisabled}
      >
        회원가입하기
      </Button>
    </form>
  );
};

export default RegisterForm;
