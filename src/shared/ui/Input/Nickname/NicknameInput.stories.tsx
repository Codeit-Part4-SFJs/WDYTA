import { FormValues } from '@/shared/@common/types/input';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { NicknameInput } from './NicknameInput';

export default {
  title: 'Input/Nickname',
  component: NicknameInput,
} as Meta;

const Template: StoryFn = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });

  return <NicknameInput register={register} errors={errors} />;
};

export const Default = Template.bind({});
