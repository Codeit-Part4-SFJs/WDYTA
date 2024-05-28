import { AuthInputProps } from '@/shared/types/input';
import Label from '../Label';
import HelperText from '../HelperText';
import { Input } from '../Input';

export const EmailInput = ({ register, errors }: AuthInputProps) => {
  return (
    <div className="flex flex-col gap-2.5">
      <Label htmlFor="email">이메일</Label>
      <Input
        id="email"
        inputSize="large"
        type="email"
        placeholder="이메일을 입력해주세요"
        {...register('email', {
          required: '이메일을 입력해주세요',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: '잘못된 이메일입니다',
          },
        })}
        isError={!!errors.email}
      />
      {errors.email && (
        <HelperText type="error">{errors.email.message}</HelperText>
      )}
    </div>
  );
};
