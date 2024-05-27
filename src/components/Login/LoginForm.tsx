"use client";
import { FormValues } from "@/shared/types/input";
import Button, { ButtonKind } from "@/shared/ui/Button/Button";
import EmailInput from "@/shared/ui/Input/Email";
import PasswordInput from "@/shared/ui/Input/Password";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    //@todo API 요청
  };

  return (
    <form
      className="flex flex-col gap-10 mobile:gap-[30px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <Button
        type="submit"
        kind={ButtonKind.primary}
        customSize="mt-[20px] w-[335px] md:w-[440px] lg:w-[640px] h-[50px] md:h-[55px] lg:h-[65px]"
      >
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
