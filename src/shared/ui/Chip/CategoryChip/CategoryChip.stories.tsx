import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { ProductCategoryEnum } from '@/shared/ui/Chip/types/categoryChipType';
import { CategoryChip } from './index';
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
