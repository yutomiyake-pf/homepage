import { NextPage } from "next";
import { CareerContainer } from "../_features/career/CareerContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "経歴",
  description: "みやくんの経歴。これまでのキャリアや職務経歴を紹介しています。",
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "経歴 | みやくん",
    description: "みやくんの経歴。これまでのキャリアや職務経歴を紹介しています。",
    url: "/career",
  },
};

const Page: NextPage = () => {
  return <CareerContainer key={Date.now()} />;
};

export default Page;
