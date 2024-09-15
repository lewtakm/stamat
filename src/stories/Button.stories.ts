import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components";
import { fn } from "@storybook/test";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  args: { onClick: fn() },
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
    isLoading: false,
    rounded: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "Button",
    isLoading: false,
    rounded: false,
  },
};
