'use client';

import { FormValues } from '@/shared/types/input';
import Button, { ButtonKind } from '@/shared/ui/Button/Button';
import { EmailInput } from '@/shared/ui/Input/Email';
import { NicknameInput } from '@/shared/ui/Input/Nickname';
import { PasswordInput } from '@/shared/ui/Input/Password';
import { PasswordCheckInput } from '@/shared/ui/Input/PasswordCheck';
import { SubmitHandler, useForm } from 'react-hook-form';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormValues> = (data) => [console.log(data)];

  const password = watch('password');

  return (
    <form
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
        customSize={`${!isValid ? 'cursor-not-allowed' : 'cursor-pointer'} mt-[20px] mobile:mt-[126px] w-[335px] md:w-[440px] lg:w-[640px] h-[50px] md:h-[55px] lg:h-[65px]`}
        disabled={!isValid}
      >
        회원가입하기
      </Button>
    </form>
  );
};

export default RegisterForm;
