import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HobbyArticleContainer } from "./index";

const meta = {
  title: "features/hobbyBlog/HobbyArticleContainer",
  component: HobbyArticleContainer,
} satisfies Meta<typeof HobbyArticleContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    article: {
      title: "サンプル趣味ブログ記事",
      slug: "sample-article",
      date: "2025-01-01",
      tags: ["タグ1", "タグ2"],
      contentHtml: "<p>サンプル本文です。</p>",
    },
  },
};
