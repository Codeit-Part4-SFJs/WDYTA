import { FormValues } from '@/shared/@common/types/input';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { PasswordInput } from './PasswordInput';

export default {
  title: 'Input/PasswordInput',
  component: PasswordInput,
} as Meta;

const Template: StoryFn = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });

  return <PasswordInput register={register} errors={errors} />;
};

export const Default = Template.bind({});
