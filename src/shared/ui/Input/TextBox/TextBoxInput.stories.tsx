import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import TextBoxInput from ".";
import { FormValues } from "@/shared/types/input";

export default {
  title: "Input/TextBoxInput",
  component: TextBoxInput,
} as Meta;

const Template: StoryFn<{ text: string }> = () => {
  const { register, watch } = useForm<FormValues>({ mode: "onChange" });

  const text = watch("textarea", "");

  return <TextBoxInput register={register} text={text} />;
};

export const Default = Template.bind({});