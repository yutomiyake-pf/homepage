import { NextPage } from "next";
import { TopContainer } from "./_features/top/TopContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ホーム | メニュー",
};

const Page: NextPage = () => {
  return <TopContainer key={Date.now()} />;
};

export default Page;
