import React, { PropsWithChildren } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Loading } from '@/shared/ui/Icon';
import { LoadingProps } from '@/shared/ui/Icon/types/iconType';

export default {
  title: 'Icon/Loading',
  component: Loading,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
- iconClassName: icon에 대한 스타일을 조정할 수 있습니다. 선택이므로 필요하지 않을 시 추가하지 않으셔도 됩니다.(기본값 지정)

- textClassName: 텍스트에 대한 스타일을 조정할 수 있습니다. 선택이므로 필요하지 않을 시 추가하지 않으셔도 됩니다.(기본값 지정)
  
- children: text에 들어올 값을 children으로 넘겨줄 수 있습니다.


        `,
      },
    },
  },
  argTypes: {
    iconClassName: { control: 'text' },
    textClassName: { control: 'text' },
    children: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<PropsWithChildren<LoadingProps>> = (args) => (
  <Loading {...args} />
);

export const LoadingIcon = Template.bind({});
LoadingIcon.args = {
  iconClassName: '',
  textClassName: '',
  children: '로딩 중...',
};
