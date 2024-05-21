import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import "../../../styles/globals.css";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const exampleButton1 = Template.bind({});
exampleButton1.args = {
  size: "L",
  kind: "primary",
  children: "예시",
};
exampleButton1.storyName = "공용 버튼";
