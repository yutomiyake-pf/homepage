import type { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./index";

const meta = {
  title: "features/top/Menu",
  component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
