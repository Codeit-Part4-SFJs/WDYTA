import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Dropdown, {
  DropdownSize,
  DropdownHeightEnum,
  DropdownIconEnum,
  DropdownPaddingEnum,
} from "./Dropdown";
import "../../../styles/globals.css";

export default {
  title: "Dropdown",
  component: Dropdown,
  argTypes: {
    size: {
      control: "select",
      options: ["L", "M", "S"],
    },
    customSize: {
      control: "text",
    },
  },
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const exampleButton1 = Template.bind({});
exampleButton1.args = {
  options: [
    { value: "1", label: "1" },
    { value: "예시", label: "예시" },
    { value: "example", label: "예" },
    { value: "abc", label: "cba" },
  ],
  size: DropdownSize.L,
  defaultValue: "예시",
};
