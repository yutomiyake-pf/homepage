import { NextPage } from "next";
import { CareerContainer } from "../_features/career/CareerContainer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "経歴",
};

const Page: NextPage = () => {
  return <CareerContainer key={Date.now()} />;
};

export default Page;
