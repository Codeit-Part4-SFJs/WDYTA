import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { CompareChip, CompareColor } from './index';
import '@/styles/globals.css';

export default {
  title: 'Chip/CompareChip',
  component: CompareChip,
  argTypes: {
    productName: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: Object.values(CompareColor).filter(
        (value) => typeof value === 'string',
      ),
    },
  },
} as Meta<typeof CompareChip>;

const Template: StoryFn<typeof CompareChip> = (args) => (
  <CompareChip {...args} />
);
export const exampleCompareChip = Template.bind({});
exampleCompareChip.args = {
  productName: 'IPhone 14 Pro Max',
  color: CompareColor.GREEN,
};
