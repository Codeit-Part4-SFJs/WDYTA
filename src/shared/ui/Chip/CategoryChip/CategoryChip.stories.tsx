import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import CategoryChip from '.';
import { ProductCategoryEnum } from '@/shared/types/categoryChipType';
import '@/styles/globals.css';

export default {
  title: 'Chip/CategoryChip',
  component: CategoryChip,
  argTypes: {
    categoryID: {
      control: 'select',
      options: Object.values(ProductCategoryEnum).filter(
        (value) => typeof value === 'number',
      ),
    },
  },
} as Meta<typeof CategoryChip>;

const Template: StoryFn<typeof CategoryChip> = (args) => (
  <CategoryChip {...args} />
);

export const exampleCategoryChip = Template.bind({});
exampleCategoryChip.args = {
  categoryID: ProductCategoryEnum['음악'],
};
