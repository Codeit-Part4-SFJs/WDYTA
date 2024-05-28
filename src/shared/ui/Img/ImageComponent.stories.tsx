import { Meta, StoryFn } from '@storybook/react';
import { ImageComponent } from '@/shared/ui/Img';
import { ImageProps } from '@/shared/ui/Img/types/imageType';
import '@/styles/globals.css';

export default {
  title: 'Image/ImageComponent',
  component: ImageComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
type을 조절해 profile, product, review 타입에 맞게 사용이 가능합니다.

- profile, product 타입 값은 프로젝트 메인 홈 화면에 있는 이미지의 사이즈들을 디폴트로 구현했습니다.
  사이즈 조절이 필요한 경우 className으로 넘겨주면 됩니다.
  
- review 타입은 상품 상세 화면에 있는 크기들을 디폴드로 잡았습니다. 마찬가지로 사이즈 조절 필요 시 className으로 전달!
        `,
      },
    },
  },
  argTypes: {
    type: {
      control: { type: 'select', options: ['product', 'profile', 'review'] },
    },
    className: { control: 'text' },
    src: { control: 'text' },
    alt: { control: 'text' },
  },
} as Meta<typeof ImageComponent>;

const Template: StoryFn<ImageProps> = (args) => <ImageComponent {...args} />;

export const ProductImage = Template.bind({});
ProductImage.args = {
  type: 'product',
  src: 'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/156/1716641993564/next.js.png',
  alt: 'Product Image',
};

export const ProfileImage = Template.bind({});
ProfileImage.args = {
  type: 'profile',
  src: 'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/156/1716641993564/next.js.png',
  alt: 'Profile Image',
};

export const ReviewImage = Template.bind({});
ReviewImage.args = {
  type: 'review',
  src: 'https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/156/1716641993564/next.js.png',
  alt: 'Review Image',
};
