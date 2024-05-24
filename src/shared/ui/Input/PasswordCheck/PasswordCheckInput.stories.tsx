import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import PasswordCheckInput, { PasswordCheckInputProps } from ".";
import "@/styles/globals.css";
import { FormValues } from "@/shared/types/input";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

const withFormProvider = (Story: StoryFn) => {
  const methods = useForm<FormValues>();
  return (
    <FormProvider {...methods}>
      <Story />
    </FormProvider>
  );
};

export default {
  title: "PasswordCheckInput",
  component: PasswordCheckInput,
  decorators: [withFormProvider],
  argTypes: {
    password: {
      control: "text",
    },
  },
} as Meta<typeof PasswordCheckInput>;

const Template: StoryFn<PasswordCheckInputProps> = (args) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
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
  password: "examplePassword",
};
