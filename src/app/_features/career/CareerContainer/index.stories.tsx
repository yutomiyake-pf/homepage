import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CareerContainer } from "./index";

const meta = {
  title: "features/career/CareerContainer",
  component: CareerContainer,
} satisfies Meta<typeof CareerContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
