import type { Meta, StoryObj } from "@storybook/react";
import { AppleMusicWidget } from "./index";

const meta = {
  title: "features/profile/AppleMusicWidget",
  component: AppleMusicWidget,
} satisfies Meta<typeof AppleMusicWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    playlistUrl:
      "https://embed.music.apple.com/jp/playlist/%E3%81%8A%E6%B0%97%E3%81%AB%E5%85%A5%E3%82%8A%E3%81%AE%E6%9B%B2/pl.u-ovUGaDyr8E",
  },
};
