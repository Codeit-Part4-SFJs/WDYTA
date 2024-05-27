import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import SideMenu from "@/shared/ui/Menu/SideMenu/SideMenu";
import "@/styles/globals.css";

export default {
  title: "SideMenu",
  component: SideMenu,
  argTypes: {
    categories: {
      description: "'/categories'로 GET 요청하여 받은 데이터",
    },
  },
} as Meta<typeof SideMenu>;

const Template: StoryFn<typeof SideMenu> = () => (
  <SideMenu categories={undefined} />
);

export const exampleSideMenu = Template.bind({});
