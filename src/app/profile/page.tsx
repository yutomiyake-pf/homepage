import { NextPage } from "next";
import { ProfileContainer } from "../_features/profile/ProfileContainer";
import { profileData } from "../_features/profile/ProfileContainer/profile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プロフィール",
};

const Page: NextPage = () => {
  return <ProfileContainer key={Date.now()} profile={profileData} />;
};

export default Page;
