import { NextPage } from "next";
import { ProfileContainer } from "../_features/profile/ProfileContainer";
import { profileData } from "../_features/profile/ProfileContainer/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロフィール",
  description: "みやくんのプロフィール。自己紹介や趣味などを紹介しています。",
  alternates: {
    canonical: "/profile",
  },
  openGraph: {
    title: "プロフィール | みやくん",
    description: "みやくんのプロフィール。自己紹介や趣味などを紹介しています。",
    url: "/profile",
  },
};

const Page: NextPage = () => {
  return <ProfileContainer key={Date.now()} profile={profileData} />;
};

export default Page;
