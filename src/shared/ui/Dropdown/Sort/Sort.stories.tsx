import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { Sort } from './Sort';
import '@/styles/globals.css';

export default {
  title: 'Sort',
  component: Sort,
} as Meta<typeof Sort>;

const Template: StoryFn<typeof Sort> = (args) => <Sort {...args} />;

export const exampleButton1 = Template.bind({});
exampleButton1.args = {
  options: [
    { value: '최신순', label: '최신순' },
    { value: '인기순', label: '인기순' },
    { value: '등록순', label: '등록순' },
    { value: '아', label: '아' },
  ],
  defaultValue: '최신순',
};
