import { Meta, StoryFn } from "@storybook/react";
import IconComponent from "./Icon";
import { IconProps, IconType } from "@/shared/ui/Icon/type/iconType";
import { iconTypes } from "./Icon";

export default {
  title: "Icon/IconComponent",
  component: IconComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
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
    name: { control: { type: "select", options: Object.values(iconTypes) } },
    className: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<IconProps> = (args) => <IconComponent {...args} />;

export const Icon = Template.bind({});

Icon.args = {
  name: "StarIcon",
  className:
    "mobile:w-[12px] mobile:h-[12px] md:w-[15px] md:h-[15px] lg:w-[16px] lg:h-[16px]",
};
