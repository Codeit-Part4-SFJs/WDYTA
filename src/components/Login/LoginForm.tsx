'use client';

import { FormValues } from '@/shared/@common/types/input';
import { Button, ButtonKind } from '@/shared/ui/Button/Button';
import { EmailInput } from '@/shared/ui/Input/Email';
import { PasswordInput } from '@/shared/ui/Input/Password';
import { SubmitHandler, useForm } from 'react-hook-form';
import useLoginMutation from './hooks/useLoginMutation';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormValues>({ mode: 'onChange' });
  const { mutate, isPending } = useLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    mutate(data);
  };

  const isButtonDisabled = !isValid || isSubmitting || isPending;

  return (
    <form
      autoComplete="off"
      className="flex flex-col gap-10 mobile:gap-[30px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <Button
        type="submit"
        kind={ButtonKind.primary}
        customSize={`${isButtonDisabled ? 'cursor-not-allowed' : 'cursor-pointer'} mt-[20px] w-[335px] md:w-[440px] lg:w-[640px] h-[50px] md:h-[55px] lg:h-[65px]`}
        disabled={isButtonDisabled}
      >
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
