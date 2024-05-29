import { FormValues } from '@/shared/@common/types/input';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { TextBoxInput } from './TextBoxInput';

export default {
  title: 'Input/TextBoxInput',
  component: TextBoxInput,
} as Meta;

const Template: StoryFn<{ text: string }> = () => {
  const { register, watch } = useForm<FormValues>({ mode: 'onChange' });

  const text = watch('textarea', '');

  return <TextBoxInput register={register} text={text} />;
};

export const Default = Template.bind({});
