import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import NicknameInput from ".";
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
  title: "NicknameInput",
  component: NicknameInput,
  decorators: [withFormProvider],
} as Meta<typeof NicknameInput>;

const Template: StoryFn<AuthInputProps> = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return <NicknameInput register={register} errors={errors} />;
};

export const Default = Template.bind({});
