import type { Meta, StoryObj } from "@storybook/react";
import { ProfileContainer } from "./index";
import { profileData } from "./profile";

const meta = {
  title: "features/profile/ProfileContainer",
  component: ProfileContainer,
} satisfies Meta<typeof ProfileContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    profile: profileData,
  },
};
