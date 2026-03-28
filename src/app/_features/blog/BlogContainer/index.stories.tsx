import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BlogContainer } from "./index";

const meta = {
  title: "features/blog/BlogContainer",
  component: BlogContainer,
} satisfies Meta<typeof BlogContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    articles: [
      {
        id: "1",
        title: "サンプル記事タイトル",
        published_at: "2025-01-01 00:00",
        display_published_at: "2025-01-01",
        url: "https://example.com/article-1",
      },
    ],
  },
};
