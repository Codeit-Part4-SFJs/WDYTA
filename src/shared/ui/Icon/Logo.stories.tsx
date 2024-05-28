import { Meta, StoryFn } from '@storybook/react';
import { Logo } from '@/shared/ui/Icon';

export default {
  title: 'Icon/Logo',
  component: Logo,
} as Meta;

const Template: StoryFn = () => <Logo />;

export const LogoIcon = Template.bind({});
