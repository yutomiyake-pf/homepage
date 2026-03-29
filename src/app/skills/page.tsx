import { NextPage } from "next";
import { SkillsContainer } from "../_features/skills/SkillsContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "資格・スキル",
  description:
    "みやくんの資格・スキル一覧。保有資格や技術スキルを紹介しています。",
  alternates: {
    canonical: "/skills",
  },
  openGraph: {
    title: "資格・スキル | みやくん",
    description:
      "みやくんの資格・スキル一覧。保有資格や技術スキルを紹介しています。",
    url: "/skills",
  },
};

const Page: NextPage = () => {
  return <SkillsContainer key={Date.now()} />;
};

export default Page;
