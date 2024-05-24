import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Input from ".";
import "@/styles/globals.css";

export default {
  title: "Input",
  component: Input,
  argTypes: {
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
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const exampleInput = Template.bind({});
exampleInput.args = {
  inputSize: "small",
  type: "email",
  placeholder: "비밀번호를 입력해주세요",
};
