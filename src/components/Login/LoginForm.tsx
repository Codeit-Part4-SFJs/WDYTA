"use client";
import { FormValues } from "@/shared/types/input";
import Button, { ButtonKind } from "@/shared/ui/Button/Button";
import EmailInput from "@/shared/ui/Input/Email";
import PasswordInput from "@/shared/ui/Input/Password";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: "onChange" });

  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    //@todo API 요청
  };

  const email = watch("email");
  const password = watch("password");

  useEffect(() => {
    setIsDisabled(!isValid || !email || !password);
  }, [email, password, isValid]);

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
        customSize={`${isDisabled ? "cursor-not-allowed" : "cursor-pointer"} mt-[20px] w-[335px] md:w-[440px] lg:w-[640px] h-[50px] md:h-[55px] lg:h-[65px]`}
        disabled={isDisabled}
      >
        로그인
      </Button>
    </form>
  );
};

export default LoginForm;
