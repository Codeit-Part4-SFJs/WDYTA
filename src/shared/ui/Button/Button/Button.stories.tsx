import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button, { ButtonKind } from "./index";
import "../../../../styles/globals.css";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    kind: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
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
};
