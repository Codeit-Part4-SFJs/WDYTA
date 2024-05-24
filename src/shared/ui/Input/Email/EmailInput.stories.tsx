import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import EmailInput from ".";
import "@/styles/globals.css";
import { FormValues, AuthInputProps } from "@/shared/types/input";
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
  title: "EmailInput",
  component: EmailInput,
  decorators: [withFormProvider],
} as Meta<typeof EmailInput>;

const Template: StoryFn<AuthInputProps> = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return <EmailInput register={register} errors={errors} />;
};

export const Default = Template.bind({});
