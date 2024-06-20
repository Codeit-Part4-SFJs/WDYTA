import { AuthInputProps } from '@/shared/@common/types/input';
import HelperText from '../HelperText';
import { Input } from '../Input';

interface ProductInputProps extends AuthInputProps {
  productName?: string;
}

export const ProductInput = ({
  register,
  errors,
  productName,
}: ProductInputProps) => {
  return (
    <>
      <Input
        inputSize="small"
        type="text"
        placeholder="상품명 (상품 등록 여부를 확인해 주세요)"
        defaultValue={productName || ''}
        {...register('productName', {
          required: '상품명을 입력해주세요',
          maxLength: {
            value: 20,
            message: '상품명은 20자 이하로 작성해주세요',
          },
        })}
        isError={!!errors.productName}
      />
      <HelperText type={errors.productName ? 'error' : 'basic'}>
        {errors.productName ? errors.productName.message : '최대 20자 가능'}
      </HelperText>
    </>
  );
};
