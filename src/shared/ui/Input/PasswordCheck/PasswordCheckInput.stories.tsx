import { FormValues } from '@/shared/@common/types/input';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import {
  PasswordCheckInput,
  PasswordCheckInputProps,
} from './PasswordCheckInput';

export default {
  title: 'Input/PasswordCheckInput',
  component: PasswordCheckInput,
} as Meta;

const Template: StoryFn<PasswordCheckInputProps> = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });

  const password = watch('password');

  return (
    <PasswordCheckInput
      register={register}
      errors={errors}
      password={password}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  password: 'qwerqwer1234!',
};
