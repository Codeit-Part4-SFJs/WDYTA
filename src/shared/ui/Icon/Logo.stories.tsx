import { Meta, StoryFn } from "@storybook/react";
import Logo from "./Logo";

export default {
  title: "Icon/Logo",
  component: Logo,
} as Meta;

const Template: StoryFn = () => <Logo />;

export const Icon = Template.bind({});
