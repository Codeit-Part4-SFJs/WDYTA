import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CategoryFilterChip from '.';
import { ProductCategoryEnum } from '@/shared/types/categoryChipType';
import '@/styles/globals.css';

export default {
  title: 'Chip/CategoryFilterChip',
  component: CategoryFilterChip,
  argTypes: {
    categoryID: {
      control: 'select',
      options: Object.values(ProductCategoryEnum).filter(
        (value) => typeof value === 'number',
      ),
    },
  },
} as Meta<typeof CategoryFilterChip>;

const Template: StoryFn<typeof CategoryFilterChip> = (args) => (
  <CategoryFilterChip {...args} />
);

export const exampleCategoryFilterChip = Template.bind({});
exampleCategoryFilterChip.args = {
  categoryID: ProductCategoryEnum['음악'],
};
