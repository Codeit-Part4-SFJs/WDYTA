import { Meta, StoryFn } from "@storybook/react";
import Floating from ".";

export default {
  title: "Floating",
  component: Floating,
  argTypes: {
    location: {
      control: "text",
    },
  },
} as Meta<typeof Floating>;

const Template: StoryFn<typeof Floating> = (args) => <Floating {...args} />;

export const exampleFloating = Template.bind({});
exampleFloating.args = {
  location: "",
};
