import type { Meta, StoryObj } from "@storybook/react";
import { SkillsContainer } from "./index";

const meta = {
  title: "features/skills/SkillsContainer",
  component: SkillsContainer,
} satisfies Meta<typeof SkillsContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
