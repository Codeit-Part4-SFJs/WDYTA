import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ThumbsChip from '.';
import '@/styles/globals.css';

export default {
  title: 'Chip/ThumbsChip',
  component: ThumbsChip,
  argTypes: {
    reviewID: {
      control: 'number',
    },
    isLike: {
      control: 'boolean',
    },
    likeCount: {
      control: 'number',
    },
  },
} as Meta<typeof ThumbsChip>;

const Template: StoryFn<typeof ThumbsChip> = (args) => <ThumbsChip {...args} />;
export const exampleThumbsChip = Template.bind({});
exampleThumbsChip.args = {
  reviewID: 1,
  isLike: false,
  likeCount: 99,
};
