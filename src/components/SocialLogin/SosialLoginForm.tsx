"use client";

import { FormValues } from "@/shared/types/input";
import Button, { ButtonKind } from "@/shared/ui/Button/Button";
import NicknameInput from "@/shared/ui/Input/Nickname";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const SocialLoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>({ mode: "onChange" });

  const [isDisabled, setIsDisabled] = useState(true);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    //@todo API 요청
  };

  const nickname = watch("nickname");

  useEffect(() => {
    setIsDisabled(!isValid || !nickname);
  }, [isValid, nickname]);

  return (
    <form className="flex flex-col gap-[60px]">
      <NicknameInput register={register} errors={errors} />
      <Button
        type="submit"
        kind={ButtonKind.primary}
        customSize={`${isDisabled ? "cursor-not-allowed" : "cursor-pointer"} mt-[20px] w-[335px] md:w-[440px] lg:w-[640px] h-[50px] md:h-[55px] lg:h-[65px]`}
        disabled={isDisabled}
      >
        가입하기
      </Button>
    </form>
  );
};

export default SocialLoginForm;
