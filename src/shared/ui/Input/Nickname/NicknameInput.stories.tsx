import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import Nickname from ".";
import { FormValues } from "@/shared/types/input";

export default {
  title: "Input/Nickname",
  component: Nickname,
} as Meta;

const Template: StoryFn = () => {
  const {
    register,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });

  return <Nickname register={register} errors={errors} />;
};

export const Default = Template.bind({});
