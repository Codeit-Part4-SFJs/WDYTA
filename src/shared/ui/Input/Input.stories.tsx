import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Input from ".";
import { useForm, FormProvider } from "react-hook-form";
import { FormValues } from "@/shared/types/input";
import "../../../styles/globals.css";

const withFormProvider = (Story: StoryFn) => {
  const methods = useForm<FormValues>();
  return (
    <FormProvider {...methods}>
      <Story />
    </FormProvider>
  );
};

export default {
  title: "Input",
  component: Input,
  decorators: [withFormProvider],
  argTypes: {
    id: { control: false },
    inputSize: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "The size of the input field",
      table: {
        type: { summary: '"small" | "medium" | "large"' },
      },
    },
    type: {
      control: "select",
      options: ["text", "email", "password"],
    },
    placeholder: {
      control: "text",
    },
    register: { control: false },
    errors: { control: false },
    validation: { control: false },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => {
  const methods = useForm<FormValues>();
  const {
    register,
    formState: { errors },
  } = methods;

  return <Input {...args} register={register} errors={errors} />;
};

export const exampleInput = Template.bind({});
exampleInput.args = {
  id: "email",
  inputSize: "small",
  type: "email",
  placeholder: "비밀번호를 입력해주세요",
  validation: {},
};
