import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Dropdown from './index';
import '../../../../styles/globals.css';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta<typeof Dropdown>;

const Template: StoryFn<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const exampleButton1 = Template.bind({});
exampleButton1.args = {
  options: [
    { value: '1', label: '1' },
    { value: '예시', label: '예시' },
    { value: 'example', label: '예' },
    { value: 'abc', label: 'cba' },
  ],
  placeholder: '예시',
};
