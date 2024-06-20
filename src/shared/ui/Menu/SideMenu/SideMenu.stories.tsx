import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { SideMenu } from '@/shared/ui/Menu/SideMenu';
import '@/styles/globals.css';

export default {
  title: 'SideMenu',
  component: SideMenu,
} as Meta<typeof SideMenu>;

const Template: StoryFn<typeof SideMenu> = () => <SideMenu />;

export const exampleSideMenu = Template.bind({});
