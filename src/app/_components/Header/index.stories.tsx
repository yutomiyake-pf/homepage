import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Header } from "./index";

const meta = {
  title: "components/Header",
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "サンプルタイトル",
  },
};
