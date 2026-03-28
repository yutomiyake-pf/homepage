import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HobbyListContainer } from "./index";

const meta = {
  title: "features/hobbyBlog/HobbyListContainer",
  component: HobbyListContainer,
} satisfies Meta<typeof HobbyListContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    articles: [
      {
        title: "サンプル趣味ブログ",
        slug: "sample-hobby",
        date: "2025-01-01",
        tags: ["タグ1"],
        summary: "サンプルの概要です。",
      },
    ],
  },
};
