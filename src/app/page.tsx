import { NextPage } from "next";
import { TopContainer } from "./_features/top/TopContainer";

const Page: NextPage = () => {
  return <TopContainer key={Date.now()} />;
};

export default Page;
