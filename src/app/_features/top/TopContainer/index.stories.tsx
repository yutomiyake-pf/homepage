import type { Meta, StoryObj } from "@storybook/react";
import { TopContainer } from "./index";

const meta = {
  title: "features/top/TopContainer",
  component: TopContainer,
} satisfies Meta<typeof TopContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
