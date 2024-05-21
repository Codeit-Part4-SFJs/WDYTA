import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import "../../../styles/globals.css";

export default {
  title: "Button",
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const exampleButton1 = Template.bind({});
exampleButton1.args = {
  size: "L",
  kind: "primary",
  children: "예시",
};
exampleButton1.storyName = "공용 버튼";
