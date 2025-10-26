import { NextPage } from "next";
import { SkillsContainer } from "../_features/skills/SkillsContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "資格・スキル",
};

const Page: NextPage = () => {
  return <SkillsContainer key={Date.now()} />;
};

export default Page;
