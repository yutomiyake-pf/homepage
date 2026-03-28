import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Item } from "./index";

const meta = {
  title: "features/skills/Item",
  component: Item,
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Skill: Story = {
  args: {
    name: "React",
    type: "skill",
  },
};

export const Certification: Story = {
  args: {
    name: "AWS認定ソリューションアーキテクト",
    type: "certification",
  },
};
