import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import TextBoxInput, { TextBoxInputProps } from ".";
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
  title: "TextBoxInput",
  component: TextBoxInput,
  decorators: [withFormProvider],
  argTypes: {
    text: {
      control: "text",
    },
  },
} as Meta<typeof TextBoxInput>;

const Template: StoryFn<TextBoxInputProps> = (args) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  return <TextBoxInput register={register} text={args.text} />;
};

export const Default = Template.bind({});
Default.args = {
  text: "",
};
