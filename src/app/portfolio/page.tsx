import { NextPage } from "next";
import { UnderConstruction } from "../_components/UnderConstruction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ポートフォリオ",
};

// TODO ここにサイトのリストを出してクリックで遷移するようにする
const Page: NextPage = () => {
  return <UnderConstruction pageName="ポートフォリオ" />;
};

export default Page;
