import Label from "../Label";
import Input from "..";
import HelperText from "../HelperText";
import { AuthInputProps } from "@/shared/types/input";

const NicknameInput = ({ register, errors }: AuthInputProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <Label htmlFor="nickname">닉네임</Label>
      <Input
        id="nickname"
        inputSize="large"
        type="text"
        placeholder="닉네임을 입력해 주세요"
        {...register("nickname", {
          required: "닉네임을 입력해주세요",
          maxLength: {
            value: 10,
            message: "닉네임은 10자 이하로 작성해주세요",
          },
        })}
        isError={!!errors.nickname}
      />
      <HelperText type={errors.nickname ? "error" : "basic"}>
        {errors.nickname ? errors.nickname.message : "최대 10자 가능"}
      </HelperText>
    </div>
  );
};

export default NicknameInput;
