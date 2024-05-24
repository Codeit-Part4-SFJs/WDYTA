import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import PasswordInput from ".";
import "@/styles/globals.css";
import { AuthInputProps, FormValues } from "@/shared/types/input";
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
  title: "PasswordInput",
  component: PasswordInput,
  decorators: [withFormProvider],
} as Meta<typeof PasswordInput>;

const Template: StoryFn<AuthInputProps> = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return <PasswordInput register={register} errors={errors} />;
};
export const Default = Template.bind({});
