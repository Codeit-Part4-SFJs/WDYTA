import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import PasswordCheckInput from ".";
import { FormValues } from "@/shared/types/input";

export default {
  title: "Input/PasswordCheckInput",
  component: PasswordCheckInput,
  argTypes: {
    password: { control: "text" },
  },
} as Meta;

const Template: StoryFn<{ password: string }> = (args) => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  return (
    <PasswordCheckInput
      register={register}
      errors={errors}
      password={args.password}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  password: "qwerqwer1234!",
};
