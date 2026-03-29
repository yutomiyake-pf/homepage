import { NextPage } from "next";
import { UnderConstruction } from "../_components/UnderConstruction";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ギャラリー",
  description: "みやくんのギャラリー。写真や作品を紹介しています。",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "ギャラリー | みやくん",
    description: "みやくんのギャラリー。写真や作品を紹介しています。",
    url: "/gallery",
  },
};

const Page: NextPage = () => {
  return <UnderConstruction pageName="ギャラリー" />;
};

export default Page;
