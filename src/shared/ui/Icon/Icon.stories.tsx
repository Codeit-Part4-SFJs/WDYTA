import { Meta, StoryFn } from '@storybook/react';
import { IconProps } from '@/shared/ui/Icon/types/iconType';
import { iconTypes, Icon } from '@/shared/ui/Icon/';

export default {
  title: 'Icon/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
- name: 원하는 아이콘을 불러올 수 있습니다.

- className: 아이콘에 대한 크기, 반응형, 색상 등과 같은 전달할 수 있습니다. (그라데이션이 적용된 upIcon, ReviewIcon은 색상을 따로 안 넣어도 됩니다. 추후 원하는 색상이 생길 시 추가 구현 하겠습니다.)
  
- onClick: 클릭 이벤트에 대한 동작을 구현할 수 있습니다.


        `,
      },
    },
  },
  argTypes: {
    name: { control: { type: 'select', options: Object.values(iconTypes) } },
    className: { control: 'text' },
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const IconCompoent = Template.bind({});

IconCompoent.args = {
  name: 'StarIcon',
  className: '',
};
