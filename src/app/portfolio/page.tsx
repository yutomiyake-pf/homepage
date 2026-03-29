import { NextPage } from "next";
import { UnderConstruction } from "../_components/UnderConstruction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ポートフォリオ",
  description: "みやくんのポートフォリオ。制作物やプロジェクトを紹介しています。",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    title: "ポートフォリオ | みやくん",
    description:
      "みやくんのポートフォリオ。制作物やプロジェクトを紹介しています。",
    url: "/portfolio",
  },
};

// TODO ここにサイトのリストを出してクリックで遷移するようにする
const Page: NextPage = () => {
  return <UnderConstruction pageName="ポートフォリオ" />;
};

export default Page;
