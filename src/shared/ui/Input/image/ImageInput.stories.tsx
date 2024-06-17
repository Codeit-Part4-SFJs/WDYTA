import { StoryFn, Meta } from '@storybook/react';
import '@/styles/globals.css';
import { ImageInput, ImageInputProps } from './ImageInput';

export default {
  title: 'Input/ImageInput',
  component: ImageInput,
  argTypes: {
    previewImage: { control: 'text' },
    handleDeleteButton: { action: 'delete' },
    handleImageUpload: { action: 'upload' },
  },
} as Meta;

const Template: StoryFn<ImageInputProps> = (args) => <ImageInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: '',
};

export const WithImage = Template.bind({});
WithImage.args = {
  image: 'https://via.placeholder.com/150',
};
