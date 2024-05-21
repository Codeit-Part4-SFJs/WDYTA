import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button, { ButtonKind, ButtonSizeEnum } from "./Button";
import "../../../styles/globals.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    kind: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: "select",
      options: Object.values(ButtonSizeEnum),
    },
    customSize: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const exampleButton1 = Template.bind({});
exampleButton1.args = {
  children: "예시",
  kind: ButtonKind.primary,
  size: ButtonSizeEnum.M,
};
