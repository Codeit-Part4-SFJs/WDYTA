import { AuthInputProps } from '@/shared/types/input';
import { useState } from 'react';
import Label from '../Label';
import { Input } from '../Input';
import HelperText from '../HelperText';
import { Icon } from '../../Icon/Icon';

export interface PasswordCheckInputProps extends AuthInputProps {
  password: string;
}

export const PasswordCheckInput = ({
  password,
  register,
  errors,
}: PasswordCheckInputProps) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleIcon = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="flex flex-col gap-2.5">
      <Label htmlFor="passwordCheck">비밀번호 확인</Label>
      <div className="relative">
        <Input
          id="passwordCheck"
          inputSize="large"
          type={isShowPassword ? 'text' : 'password'}
          placeholder="비밀번호를 한 번 더 입력해주세요"
          {...register('passwordCheck', {
            required: '비밀번호를 입력해주세요',
            validate: (value: string) =>
              value === password || '비밀번호가 일치하지 않습니다',
          })}
          isError={!!errors.passwordCheck}
        />
        <Icon
          name={isShowPassword ? 'VisibilityIcon' : 'VisibilityOffIcon'}
          className="absolute top-[16px] lg:top-[23px] left-[293px] md:left-[398px] lg:left-[596px] w-[22px] lg:w-6 h-[22px] lg:h-6 text-gray-9F cursor-pointer"
          onClick={toggleIcon}
        />
      </div>
      {errors.passwordCheck && (
        <HelperText type="error">{errors.passwordCheck.message}</HelperText>
      )}
    </div>
  );
};
