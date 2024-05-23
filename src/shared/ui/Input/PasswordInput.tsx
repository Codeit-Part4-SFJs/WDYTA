import { useState } from "react";
import Label from "./Label";
import Input from ".";
import HelperText from "./HelperText";
import { AuthInputProps } from "@/shared/types/input";
import Icon from "../Icon/Icon";

const PasswordInput = ({ register, errors }: AuthInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleIcon = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="flex flex-col gap-2.5">
      <Label>비밀번호</Label>
      <div className="relative">
        <Input
          id="password"
          inputSize="large"
          type={isShowPassword ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요"
          register={register}
          errors={errors}
          validation={{
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 8,
              message: "비밀번호는 8자 이상이어야 합니다.",
            },
            pattern: {
              value:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).{8,}$/,
              message: "비밀번호는 영어, 숫자, 특수기호를 포함해야 합니다.",
            },
          }}
        />
        <Icon
          name={isShowPassword ? "VisibilityIcon" : "VisibilityOffIcon"}
          iconSizeClass="absolute top-[16px] lg:top-[23px] left-[293px] md:left-[398px] lg:left-[596px] w-[22px] lg:w-6 h-[22px] lg:h-6"
          onClick={toggleIcon}
        />
      </div>
      {errors.password && (
        <HelperText type="error">{errors.password.message}</HelperText>
      )}
    </div>
  );
};

export default PasswordInput;
