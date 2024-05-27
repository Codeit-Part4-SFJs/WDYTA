"use client";
import { FormValues } from "@/shared/types/input";
import Button, { ButtonKind, ButtonSizeEnum } from "@/shared/ui/Button/Button";
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
      {/* 버튼 컴포넌트 수정 후 변경 예정
      <Button type="submit" kind={ButtonKind.primary} size={ButtonSizeEnum.L}>
        로그인
      </Button> */}
    </form>
  );
};

export default LoginForm;
