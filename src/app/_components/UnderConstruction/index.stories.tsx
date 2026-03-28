import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { UnderConstruction } from "./index";

const meta = {
  title: "components/UnderConstruction",
  component: UnderConstruction,
} satisfies Meta<typeof UnderConstruction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pageName: "サンプルページ",
  },
};
