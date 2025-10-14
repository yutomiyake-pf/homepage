import { NextPage } from "next";
import { SkillsContainer } from "../_features/skills/SkillsContainer";

const Page: NextPage = () => {
  return <SkillsContainer key={Date.now()} />;
};

export default Page;
