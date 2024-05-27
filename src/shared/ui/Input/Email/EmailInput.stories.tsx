import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { FormValues } from '@/shared/types/input';
import EmailInput from './Email';

export default {
  title: 'Input/EmailInput',
  component: EmailInput,
} as Meta;

const Template: StoryFn = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({ mode: 'onChange' });

  return <EmailInput register={register} errors={errors} />;
};

export const Default = Template.bind({});
