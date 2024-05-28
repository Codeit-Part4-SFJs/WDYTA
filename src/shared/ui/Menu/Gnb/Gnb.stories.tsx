import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Gnb from '@/shared/ui/Menu/Gnb/Gnb';
import '@/styles/globals.css';

export default {
  title: 'Gnb',
  component: Gnb,
} as Meta<typeof Gnb>;

const Template: StoryFn<typeof Gnb> = () => <Gnb />;

export const exampleGnb = Template.bind({});
