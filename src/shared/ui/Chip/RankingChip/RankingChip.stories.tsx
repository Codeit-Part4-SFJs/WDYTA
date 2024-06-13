import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { RankingChip, RankingColor } from './index';
import '@/styles/globals.css';

export default {
  title: 'Chip/RankingChip',
  component: RankingChip,
  argTypes: {
    rankNumber: {
      control: {
        type: 'number',
        min: 1,
        max: 5,
      },
    },
    color: {
      control: 'select',
      options: Object.values(RankingColor).filter(
        (value) => typeof value === 'string',
      ),
    },
  },
} as Meta<typeof RankingChip>;

const Template: StoryFn<typeof RankingChip> = (args) => (
  <RankingChip {...args} />
);

export const exampleRankingChip = Template.bind({});
exampleRankingChip.args = {
  rankNumber: 1,
  color: RankingColor.PINK,
};
